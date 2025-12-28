   import React, { useEffect, useState, useRef } from "react";
   import { Link } from "react-router-dom";
   import { motion } from "framer-motion"; // NEW: Import from Framer Motion
   import "./home.css";
   import homeVideo from "../assets/images/homeVideo.mp4";

   export default function Home() {
     const [showCenter, setShowCenter] = useState(false);
     const [showMenu, setShowMenu] = useState(false);
     const videoRef = useRef(null);

     useEffect(() => {
       const v = videoRef.current;

       const startIntro = () => {
         setShowCenter(true);

         setTimeout(() => {
           console.log("Fading out center text");
           setShowCenter(false);
         }, 3000);

         setTimeout(() => {
           console.log("Showing menu");
           setShowMenu(true);
         }, 3800);
       };

       v.onplaying = () => startIntro();

       setTimeout(() => {
         if (!showCenter) startIntro();
       }, 1200);
     }, []);

     return (
       <section className="home-hero">
         <video
           ref={videoRef}
           className="bg-video"
           src={homeVideo}
           autoPlay
           loop
           muted
           playsInline
           style={{ opacity: 0.5 }}
         />

         <div className="overlay"></div>

         {showCenter && (
           <motion.div
             className="center-intro"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.3 }}
           >
             <h1 className="intro-title">25 Years of Industry Experience</h1>
             <h2 className="intro-sub">Trusted by 500+ clients</h2>
             <p className="intro-sub">Delivering excellence in training and technology</p>
           </motion.div>
         )}

         {showMenu && (
           <>
             <motion.div
               className="float-item top-left"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, delay: 0.2 }}
             >
               <Link to="/unitstills">Unit Stills</Link>
             </motion.div>
             <motion.div
               className="float-item top-right"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, delay: 0.2 }}
             >
               <Link to="/events">Events</Link>
             </motion.div>
             <motion.div
               className="float-item center-right"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, delay: 0.2 }}
             >
               <Link to="/industrial">Industrial</Link>
             </motion.div>
             <motion.div
               className="float-item bottom-right"
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1.2, delay: 0.2 }}
             >
               <Link to="/contact">Contact</Link>
             </motion.div>
           </>
         )}
       </section>
     );
   }
   