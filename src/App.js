import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ImageList from "./components/ImageList";
import Navigation from "./components/Navigation";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Home from "./routes/Home";
import axios from "axios";

// const App = () => {
//   return (
//     <div>
//       <ToastContainer />
//       <h2>사진첩</h2>
//       <UploadForm />
//       <ImageList />
//     </div>
//   );
// };

const App = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get("/images")
      .then((result) => setImages(result.data))
      .catch((err) => console.error(err));
  });

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home images={images} setImages={setImages} />}
          exact={true}
        ></Route>
        <Route path="/image" element={<ImageList images={images} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
};
export default App;
