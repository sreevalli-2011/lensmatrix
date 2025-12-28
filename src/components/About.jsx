import React from "react";
import "./about.css";
import logo from "../assets/images/logo.png"; 
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaExpand, FaAngleUp } from "react-icons/fa";
import about from "../assets/images/about.jpg"; // Replace with your about photo


function About() {
  return (
    <div className="about-section" style={{ backgroundColor: "#231820", minHeight: "100vh" }}>
      {/* ✅ NAVBAR SECTION (same as Unitstills / Events) */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="justify-content-between align-items-center">
          <Link to="/" className="navbar-brand text-white fw-bold d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo-img" />
            <h1 className="brand-title m-0">
              Devkvasu <span>Photography</span>
            </h1>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
              <Nav.Link as={Link} to="/about" className="nav-link-custom active">About</Nav.Link>
              <Nav.Link as={Link} to="/unitstills" className="nav-link-custom">Unit Stills</Nav.Link>
              <Nav.Link as={Link} to="/events" className="nav-link-custom">Events</Nav.Link>
              <Nav.Link as={Link} to="/industrial" className="nav-link-custom">Industrial</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="zoom-icon">
            <FaExpand />
          </div>
        </Container>
      </Navbar>

      {/* ✅ TITLE SECTION */}
      <section className="text-center text-white py-5 about-title">
        <h1 className="display-5 fw-semibold">About</h1>
        <hr className="about-underline" />
        <p className="mt-3 fst-italic">
          “Every click tells a story — full of light, life, and emotion.”
        </p>
      </section>

      {/* ✅ MAIN CONTENT SECTION */}
      <section className="about-content text-white px-5 pb-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <img
                src={about} // replace with your about photo
                alt="About Devkvasu Photography"
                className="img-fluid about-img rounded shadow"

                 style={{
            maxWidth: "100%",
            height: "auto",
            border: "3px solid #fff",
            borderRadius: "10px"
          }}
              />
            </div>

            {/* Right Text */}
            <div className="col-md-7">
              <p>
                Welcome to <strong>Devkvasu Photography</strong>, where passion meets precision.
                We specialize in transforming fleeting moments into timeless visual stories —
                from the energy of events to the intimacy of stills.
              </p>
              <p>
                With an eye for detail and a love for storytelling, every photograph we capture
                reflects emotion, creativity, and authenticity. We don’t just take pictures —
                we frame memories that live forever.
              </p>
              <hr className="about-divider" />
              <p className="fst-italic">“Your story, our lens — together we create magic.”</p>
            </div>
          </div>
        </div>
      </section>
       <hr className="about-separator" />

      {/* ✅ FOOTER SECTION */}
      {/* ---------- FOOTER ---------- */}

        <footer className="footer">
           <div className="footer-content">
        <h2>Devkvasu Photography</h2>
        <p>Unit Stills Photographer & Event Specialist</p>

        <div className="footer-buttons">
          <a href="#" className="btn">Unit Stills</a>
          <a href="#" className="btn">Events</a>
          <a href="#" className="btn">Industrial</a>
          <a href="#" className="btn">Contact</a>
        </div>

        <p className="address">
          Registered Address: 21 Bangalore Main Road, India 560001 <br />
          <a href="mailto:devkvasu@gmail.com">devkvasu@gmail.com</a> | +91 98765 43210
        </p>

        <p className="copyright">
          © 2025 Devkvasu Photography –{" "}
          <a href="#">Terms & Conditions</a> –{" "}
          <a href="#">Cookie Policy</a>
        </p>
      </div>

      <a href="#top" className="scroll-top">
        <FaAngleUp />
      </a>
      </footer>

   </div>
  );
}

export default About;
