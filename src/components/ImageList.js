import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const ImageList = ({ images }) => {
  //   const [images, setImages] = useState([]);
  //   useEffect(() => {
  //     axios
  //       .get("/images")
  //       .then((result) => {
  //         setImages(result.data);
  //         // console.log(images);
  //       })
  //       .catch((err) => console.error(err));
  //   }, []);

  const value = useContext(ImageContext);
  console.log(value);
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <h3>이미지 리스트</h3>
      {images.map((image) => (
        <img
          key={image.key}
          style={{ width: "100%" }}
          src={`http://localhost:5000/uploads/${image.key}`}
          alt={image.key}
        />
      ))}
    </div>
  );
};

export default ImageList;
