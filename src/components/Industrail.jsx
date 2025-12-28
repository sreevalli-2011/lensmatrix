import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./unitstills.css";
import logo from "../assets/images/logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaExpand } from "react-icons/fa";
import { Link } from "react-router-dom";


// Import your images
import im1 from "../assets/images/indu-1.jpg";
import im2 from "../assets/images/indu-2.jpg";
import im3 from "../assets/images/indu-3.jpg";
import im4 from "../assets/images/indu-4.jpg";
import im5 from "../assets/images/indu-5.jpg";

import im7 from "../assets/images/indu-7.jpg";
import im8 from "../assets/images/indu-8.jpg";
import im9 from "../assets/images/indu-9.jpg";
import im10 from "../assets/images/indu-10.jpg";
import im11 from "../assets/images/indu-11.jpg";
import im12 from "../assets/images/indu-12.jpg";
import im13 from "../assets/images/indu-12.jpg";
import im14 from "../assets/images/indu-14.jpg";
import im15 from "../assets/images/indu-15.jpg";
import im16 from "../assets/images/im-16.jpg";
import im17 from "../assets/images/im-17.jpg";


const UnitStills = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const pics = [
    { src: im1, title: "Behind The Scenes" },
    { src: im2, title: "Character Portrait" },
    { src: im3, title: "On Location" },
    { src: im4, title: "Crew in Action" },
    { src: im5, title: "Film Set Lighting" },
    { src: im7, title: "on Location" },
    { src: im8, title: "on Location" },
   
    { src: im9, title: "on Location" },
    { src: im10, title: "on Location" },
    { src: im11, title: "on Location" },
    { src: im12, title: "on Location" },
    { src: im13, title: "on Location" },
    { src: im14, title: "on Location" },
    { src: im15, title: "on Location" },
   
    
  ];
 

  return (
    <div className="unit-stills-section">
      {/* NAVBAR */}
      <Navbar expand="lg" className="custom-navbar">
        <Container fluid className="justify-content-between align-items-center">
          <Link to="/" className="navbar-brand text-white fw-bold">
      
            <img src={logo} alt="Logo" className="logo-img" />
           <h1 className="brand-title m-0">
            Devkvasu <span>Photography</span>
          </h1>
          </Link>     

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <Nav.Link href="#about" className="nav-link-custom">
               Home
              </Nav.Link>
              <Nav.Link href="#advertising" className="nav-link-custom">
              About
              </Nav.Link>
              <Nav.Link href="#unitstills" className="nav-link-custom active">
                UNIT STILLS
              </Nav.Link>
              <Nav.Link href="#actorheadshots" className="nav-link-custom">
              Events
              </Nav.Link>
              <Nav.Link href="#portfolio" className="nav-link-custom">
              Industrial
              </Nav.Link>
              <Nav.Link href="#credits" className="nav-link-custom">
              Contact
              </Nav.Link>
            
            </Nav>
          </Navbar.Collapse>

          <div className="zoom-icon">
            <FaExpand />
          </div>
        </Container>
      </Navbar>

      {/* MAIN TITLE */}
      <section className="text-center text-white py-5">
        <h1 className="display-5 fw-semibold">Industrial Photography Portfolio</h1>
        <p className="mt-3 fst-italic">
          “We were walking through your selects this afternoon and are truly floored.
          Incredible work on this project and looking forward to seeing the world react
          to the assets.”
        </p>
        <p className="fw-bold text-uppercase mt-3">
          – devkvasu
        </p>
      </section>

      {/* GALLERY */}
      <div className="container-fluid px-5 pb-5">
        <div className="row g-4">
          {pics.map((pic, i) => (
            <div className="col-md-4 col-sm-6" key={i}>
              <div className="image-wrapper" onClick={() => { setIndex(i); setOpen(true); }}>
                <img src={pic.src} alt={pic.title} className="img-fluid rounded" />
                <div className="overlay">
                  <FaExpand className="overlay-icon" />
                  <p className="overlay-text">{pic.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={pics} />
    </div>
  );
};

export default UnitStills;