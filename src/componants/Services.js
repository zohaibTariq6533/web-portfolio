import React from "react";
import { useNavigate } from "react-router-dom";
export default function Services() {
  const navigate=useNavigate();

  function goToContact(){
    navigate('/contact');
  }
  return (
    <>
      <div className="contactMain" id="servicesMain">
        <h2>Solutions & Services</h2>
        <p>What We Offer</p>
      </div>
      <div className="serviceSection">
        <h3 className="serviceSectionHeading">
          Ready to turn your ideas into Reality?
        </h3>
        <div className="mainServiceContainer">
          <div className="serviceText">
            <p>Our Services</p>
            <h3>Services Tailored for You</h3>
          </div>
          <div className="mainServiceSection">
            <div className="serviceRow">
              <div className="serviceCard" id="card1" onClick={goToContact}><h6>Web developer</h6></div>
              <div className="serviceCard" id="card2" onClick={goToContact}>Wordpress Developer</div>
            </div>

            <div className="serviceRow">
            <div className="serviceCard" id="card3" onClick={goToContact}>Shopify designer</div>
            <div className="serviceCard" id="card4" onClick={goToContact}>UI/UX designer</div>
            </div>

            <div className="serviceRow">
            <div className="serviceCard" id="card5" onClick={goToContact}>Logo Designer</div>
            <div className="serviceCard" id="card6" onClick={goToContact}>SEO optimization</div>
            </div>
          </div>
        </div>
      </div>
      <div className="languages">
        <h3>Languages/FrameWorks</h3>
        <div className="languageLogosDiv">
          <div className="logoSec">
              <i className="fa-brands fa-bootstrap" id="lanLogos"></i>
              <h6>Bootstrap</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-react" id="lanLogos"></i>
              <h6>React Js</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-js" id="lanLogos"></i>
              <h6>Java Script</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-node-js" id="lanLogos"></i>
              <h6>Node JS</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-angular" id="lanLogos"></i>
              <h6>Angular JS</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-python" id="lanLogos"></i>
              <h6>Python</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-html5" id="lanLogos"></i>
              <h6>Html 5</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-css3-alt" id="lanLogos"></i>
              <h6>CSS 3</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-php" id="lanLogos"></i>
              <h6>Php</h6>
          </div>
          <div className="logoSec">
              <i className="fa-brands fa-laravel" id="lanLogos"></i>
              <h6>Laravel Php</h6>
          </div>
        </div>
      </div>
    </>
  );
}
