import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./events.css";
import logo from "../assets/images/logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import { FaExpand } from "react-icons/fa";
import { Link } from "react-router-dom";

// ✅ Import your images
import im_1 from "../assets/images/events/im_1.jpeg";
import im_2 from "../assets/images/events/im_2.jpeg";
import im_3 from "../assets/images/events/im_3.jpeg";
import im_4 from "../assets/images/events/im_4.jpeg";
import im_5 from "../assets/images/events/im_5.jpeg";
import im_6 from "../assets/images/events/im_6.jpeg";
import im_7 from "../assets/images/events/im_7.jpeg";
import im_8 from "../assets/images/events/im_8.jpeg";
import im_9 from "../assets/images/events/im_9.jpeg";
import im_10 from "../assets/images/events/im_10.jpeg";
import im_11 from "../assets/images/events/im_11.jpeg";
import im_12 from "../assets/images/events/im_12.jpeg";
import im_13 from "../assets/images/events/im_13.jpeg";
import im_14 from "../assets/images/events/im_14.jpeg";
import im_15 from "../assets/images/events/im_15.jpeg";
import im_16 from "../assets/images/events/im_16.jpeg";
import im_17 from "../assets/images/events/im_17.jpeg";
import im_18 from "../assets/images/events/im_18.jpeg";
import im_19 from "../assets/images/events/im_19.jpeg";
import im_20 from "../assets/images/events/im_20.jpeg";
import im_21 from "../assets/images/events/im_21.jpeg";
import im_22 from "../assets/images/events/im_22.jpeg";
import im_23 from "../assets/images/events/im_23.jpeg";
import im_24 from "../assets/images/events/im_24.jpeg";
import im_25 from "../assets/images/events/im_25.jpeg";
import im_26 from "../assets/images/events/im_26.jpeg";
import im_27 from "../assets/images/events/im_27.jpeg";
import im_28 from "../assets/images/events/im_28.jpeg";
import im_29 from "../assets/images/events/im_29.jpg";

const Events = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
  { src: im_1, title: "Outdoor Couple Shoot" },
  { src: im_2, title: "Traditional Wedding Ceremony" },
  { src: im_3, title: "Couple Engagement Shoot" },
  { src: im_4, title: "Candid Wedding Highlights" },
  { src: im_5, title: "Reception Evening Celebration" },
  { src: im_6, title: "Haldi Function Joy" },
  { src: im_7, title: "Mehendi Smiles" },
  { src: im_8, title: "Charming Looks" },
  { src: im_9, title: "Two hands, one heart" },
  { src: im_10, title: "Thalabarlu" },
  { src: im_11, title: "Family Gathering" },
  { src: im_12, title: "Bridal Portrait Moments" },
  { src: im_13, title: "Cultural Festival" },
  { src: im_14, title: "Dance Performance" },
  { src: im_15, title: "saree function" },
  { src: im_16, title: "Pre-Wedding Photoshoot" },
  { src: im_17, title: "Friends Reunion" },
  { src: im_18, title: "Mehendi Smiles" },
  { src: im_19, title: "Naming Ceremony" },
  { src: im_20, title: "Family Gathering" },
  { src: im_21, title: "Sangeet Night Celebration" },
  { src: im_22, title: "Graduation Day" },
  { src: im_23, title: "Travel & Nature Shots" },
  { src: im_24, title: "Music Concert" },
  { src: im_25, title: "Religious Function" },
  { src: im_26, title: "Candid Family Portraits" },
  { src: im_27, title: "Fashion Show Highlights" },
  { src: im_28, title: "Outdoor Couple Shoot" },
  { src: im_29, title: "Outdoor Couple Shoot" }
];

  return (
    <div className="events-section" style={{ backgroundColor: "#231820", minHeight: "100vh" }}>
      {/* ✅ NAVBAR SECTION */}
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
             <Nav.Link as={Link} to="/" className="nav-link-custom">
         Home
        </Nav.Link>
  
        <Nav.Link as={Link} to="/about" className="nav-link-custom">
         About
        </Nav.Link>

         <Nav.Link as={Link} to="/unitstills" className="nav-link-custom">
        Unit Stills
        </Nav.Link>

       <Nav.Link as={Link} to="/events" className="nav-link-custom">
        Events
       </Nav.Link>

      <Nav.Link as={Link} to="/industrial" className="nav-link-custom">
      Industrial
      </Nav.Link>

      <Nav.Link as={Link} to="/contact" className="nav-link-custom">
      Contact
       </Nav.Link>
            </Nav>
          </Navbar.Collapse>

          <div className="zoom-icon">
            <FaExpand />
          </div>
        </Container>
      </Navbar>

      {/* ✅ TITLE SECTION */}
      <section className="text-center text-white py-5">
        <h1 className="display-5 fw-semibold">Weddings & Special Events</h1>
        <hr style={{ width: "150px", margin: "auto", border: "2px solid #f1c40f" }} />
        <p className="mt-3 fst-italic">
          Capturing timeless moments of joy, love, and togetherness — where every frame tells a story.
        </p>
      </section>

      {/* ✅ GALLERY SECTION */}
      <div className="container-fluid px-5 pb-5">
        <div className="row g-4">
          {images.map((pic, i) => (
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

      {/* ✅ LIGHTBOX POPUP */}
      <Lightbox open={open} close={() => setOpen(false)} index={index} slides={images} />
    </div>
  );
};

export default Events;
