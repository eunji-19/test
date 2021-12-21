import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "#6F4A8E",
          fontWeight: "bold",
          fontSize: 18,
          margin: 10,
        }}
      >
        Home
      </Link>
      <Link
        to="/image"
        style={{
          textDecoration: "none",
          color: "#6F4A8E",
          fontWeight: "bold",
          fontSize: 18,
          margin: 10,
        }}
      >
        Image
      </Link>
      <Link
        to="/login"
        style={{
          textDecoration: "none",
          color: "#6F4A8E",
          fontWeight: "bold",
          fontSize: 18,
          margin: 10,
        }}
      >
        Login
      </Link>
      <Link
        to="/register"
        style={{
          textDecoration: "none",
          color: "#6F4A8E",
          fontWeight: "bold",
          fontSize: 18,
          margin: 10,
        }}
      >
        Register
      </Link>
    </div>
  );
};

export default Navigation;
