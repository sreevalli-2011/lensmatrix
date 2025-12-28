import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaExpand, FaAngleUp } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page" style={{ backgroundColor: "#231820", minHeight: "100vh" }}>
      
      {/* NAVBAR */}
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
              <Nav.Link as={Link} to="/about" className="nav-link-custom">About</Nav.Link>
              <Nav.Link as={Link} to="/unitstills" className="nav-link-custom">Unit Stills</Nav.Link>
              <Nav.Link as={Link} to="/events" className="nav-link-custom">Events</Nav.Link>
              <Nav.Link as={Link} to="/industrial" className="nav-link-custom">Industrial</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="nav-link-custom active">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="zoom-icon">
            <FaExpand />
          </div>
        </Container>
      </Navbar>

      {/* TITLE */}
      <section className="text-center text-white py-5">
        <h1 className="display-5 fw-semibold">Contact</h1>
        <hr className="contact-line" />
        <p className="mt-3 small-text">Want to check my availability? Just drop me a message!</p>
      </section>

      {/* MAIN CONTENT */}
      <div className="container text-white contact-container pb-5">
        <div className="row">
          
          {/* LEFT SIDE DETAILS */}
          <div className="col-md-5 left-details">
            <p>devkvasuphotography.com.com</p>
            <p>+91 9849361585</p>

            <p><a href="#">www.imdb.me/aimeespinks</a></p>
            <p><a href="#">www.twitter.com/spinxphoto</a></p>
            <p><a href="#">www.facebook.com/aimeespinksphotography</a></p>
            <p><a href="#">www.instagram.com/aimeespinksphotography</a></p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-md-7">
            <form>
              <label className="form-label-small">NAME:*</label>
              <input type="text" className="contact-input" />

              <label className="form-label-small">EMAIL:*</label>
              <input type="email" className="contact-input" />

              <label className="form-label-small">CONTACT TELEPHONE:</label>
              <input type="text" className="contact-input" />

              <label className="form-label-small">MESSAGE:*</label>
              <textarea className="contact-textarea"></textarea>

              <button className="contact-btn">Send</button>
            </form>
          </div>
        </div>
      </div>

      {/* FOOTER */}
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
            © 2025 Devkvasu Photography – <a href="#">Terms & Conditions</a> – <a href="#">Cookie Policy</a>
          </p>
        </div>

        <a href="#top" className="scroll-top">
          <FaAngleUp />
        </a>
      </footer>

    </div>
  );
}

export default Contact;
