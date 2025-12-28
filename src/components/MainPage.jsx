import React, { useState } from "react";
import "./mainpage.css";
import { Link } from "react-router-dom";
import bgImage from "../assets/images/44.jpg"; // background
import logo from "../assets/images/logo.png";         // logo

const MainPage = () => {
  const [hideContent, setHideContent] = useState(false);

  const toggleContent = () => {
    setHideContent(!hideContent);
  };

  return (
    <div className="main-page">
      {/* Background Image */}
      <img src={bgImage} alt="Background" className="background-image" />

      {/* Top Bar */}
      <div className="top-bar container-fluid d-flex justify-content-between align-items-center">
        {/* Logo */}
         <Link to="/" className="logo-container text-decoration-none d-flex align-items-center">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="ms-2 text-white">
            Devkvasu <span>Photography</span>
          </h1>
        </Link>

        {/* Navigation */}
        <div className="nav d-none d-md-flex">
          <ul className="nav justify-content-center">
            <li className="nav-item">
    <Link to="/home" className="nav-link text-white">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/about" className="nav-link text-white">About</Link>
  </li>
  <li className="nav-item">
    <Link to="/unitstills" className="nav-link text-white">Unit Stills</Link>
  </li>
  <li className="nav-item">
    <Link to="/events" className="nav-link text-white">Events</Link>
  </li>
  <li className="nav-item">
    <Link to="/industrial" className="nav-link text-white">Industrial</Link>
  </li>
  <li className="nav-item">
    <Link to="/contact" className="nav-link text-white">Contact</Link>
  </li>
          </ul>
        </div>

        {/* Right-side icon */}
        <div className="icon" onClick={toggleContent}>
          <span>⚙️</span>
        </div>
      </div>

      {/* Left-aligned Content */}
      {!hideContent && (
        <div className="section-content">
          <h2 className="section-title">K VasudevaRao</h2>
          <p className="section-subtext">
           Unit stills Photographer
          </p>
         <div className="btn-group mt-3" role="group">
        <button type="button" className="btn">Unitstills</button>
        <button type="button" className="btn">Events</button>
        <button type="button" className="btn">Advertising</button>
       </div>
        </div>
      )}
    </div>
  );
};

export default MainPage;

