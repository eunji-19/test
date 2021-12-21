import React, { useState } from "react";
import axios from "axios";
import styles from "./UploadForm.module.css";
import { toast } from "react-toastify";
import ProgressBar from "./ProgressBar.js";

const UploadForm = ({ images, setImages }) => {
  const defaultFileName = "이미지 파일을 업로드해주세요";
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(defaultFileName);
  const [percent, setPercent] = useState(0);
  const [imgSrc, setImgSrc] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    try {
      /**
       * client의 package.json 에서 proxy 설정
       * : proxy : "http://localhost:5000"
       */
      const response = await axios.post("/images", formData, {
        headers: { "Content-Type": "multipart/form-data" },
        onUploadProgress: (ProgressEvent) => {
          setPercent(
            Math.round(100 * (ProgressEvent.loaded / ProgressEvent.total))
          );
          console.log(ProgressEvent);
        },
      });

      setImages([...images], response.data);
      toast.success("이미지 업로드 성공😘", { autoClose: 2500 });
      setTimeout(() => {
        setPercent(0);
        setFileName(defaultFileName);
        setImgSrc(null);
      }, 3000);
    } catch (error) {
      toast.error(error.message, { autoClose: 2500 });
      setPercent(0);
      setFileName(defaultFileName);
      setImgSrc(null);
      console.error(error);
    }
  };

  const imageSelectHandler = (event) => {
    const imageFile = event.target.files[0];
    setFile(imageFile);
    setFileName(imageFile.name);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (event) => setImgSrc(event.target.result);
  };

  return (
    <form onSubmit={onSubmit}>
      <img
        src={imgSrc}
        className={`${styles.imagePreview} ${
          imgSrc && `${styles.imagePreviewShow}`
        }`}
        alt={imgSrc}
      />
      <ProgressBar percent={percent} />
      <div className={`${styles.fileDropper}`}>
        {fileName}
        <input
          id="image"
          type="file"
          onChange={imageSelectHandler}
          accept="image/*"
        />
      </div>
      <button
        type="submit"
        style={{
          backgroundColor: "#D8B6A4",
          color: "#ffffff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          width: "100%",
          fontWeight: "bold",
        }}
      >
        제출
      </button>
    </form>
  );
};

export default UploadForm;
