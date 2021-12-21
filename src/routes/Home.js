import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import UploadForm from "../components/UploadForm";

const Home = ({ images, setImages }) => {
  return (
    <div style={{ maxWidth: 600, margin: "auto" }}>
      <ToastContainer />
      <h2>사진첩</h2>
      <UploadForm images={images} setImages={setImages} />
    </div>
  );
};

export default Home;
