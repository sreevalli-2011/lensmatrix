import { useEffect } from "react";
import "./landing.css";
import signature from "../assets/images/signature.png";


const LandingPage = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // after 3 sec, go to Portfolio
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="landing-page">
    

      {/* Signature on top */}
      <img src={signature} alt="Vasu Signature" className="signature-img" />
    </div>
  );
};

export default LandingPage;
