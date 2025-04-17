import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div style={{ backgroundImage: "url('your-background-image.jpg')", height: "100vh", backgroundSize: "cover", color: "white" }}>
      <h2>Welcome to the Plant Store</h2>
      <p>Your one-stop shop for houseplants!</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
