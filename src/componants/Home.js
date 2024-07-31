import React from "react";
import { Link } from "react-router-dom";
import prj1 from "./Image/prj1.png";
import prj2 from "./Image/prj2.png";
import prj3 from "./Image/prj3.png";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();

  function goToContact(){
    navigate('/contact');
  }
  return (
    <>
      <div className="container-fluid Main" id="homeMain">
        <div className="pText">
          <label>Looking for a Web developer?</label>
        </div>
        <p className="my-3">
          Hello, I'm Zohaib Tariq, a professional web developer dedicated to
          creating high-quality, responsive, and visually appealing websites.
          With expertise in front-end and back-end development I prioritize
          meeting deadlines and exceeding client expectations, ensuring your
          website effectively showcases your brand and engages your audience.
          Let's work together to bring your vision to life and drive your
          business forward.{" "}
        </p>
        <button className="btn btn-outline-danger my-3" onClick={goToContact}>Contact Now</button>
      </div>
      <div className="services">
        <h2 className="my-5"><span className="text-danger">S</span>ervices</h2>
        <div className="serCards my-3">
          <div className="cards" id="card1" onClick={goToContact}>
            <h6>Website Developer</h6>
          </div>
          <div className="cards" id="card2" onClick={goToContact}>
            <h6>Wordpress Developer</h6>
          </div>
          <div className="cards" id="card3" onClick={goToContact}>
            <h6>Shopify Designer</h6>
          </div>
          <div className="cards" id="card4" onClick={goToContact}>
            <h6>UI/UX and Logo designer</h6>
          </div>
        </div>
        <h6 className="">
          <Link className="servicesLink" to='./services' id="animationText" >
            All Services
          </Link>
        </h6>
      </div>
      <div className="projects">
        <h2 className="py-5"><span className="text-danger">Recent</span> Projects</h2>
        <div className="d-flex  mainCarousal">
          <div id="carousalCard">
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active ">
                  <img src={prj1} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={prj2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src={prj3} className="d-block w-100" alt="..." />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1 className="" id="contactTag">
        Build SomeThing Together
      </h1>
      <div className="invCard  d-flex">
        <div id="contactCard">
          <h5>Let's Make Something Great Together.</h5>
          <Link className="btn btn-outline-danger" to='/contact'>Schedule Meeting</Link>
        </div>
        <h3>
          "Let's collaborate to craft remarkable projects. We thrive on turning
          concepts into impactful solutions through Link blend of creativity and
          technical prowess"
        </h3>
      </div>
      
    </>
  );
}
