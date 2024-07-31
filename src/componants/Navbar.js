import React from "react";
import { Link } from 'react-router-dom'



export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg  fixed-top navbar-dark Navbar">
        <div className="container ">
        <Link className="text-light nameLogo" to='/'><strong className="text-danger">Z</strong>ohaib T.</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ulDiv" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto " id="navUl">
              <li className="nav-item">
                <Link className="nav-link active pagesName" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link pagesName" to="/services">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  pagesName" to='/about'>
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  pagesName" to='/contact'>
                  Contact 
                </Link>
              </li>
            </ul> 
            
          </div>
        </div>
      </nav>
    </>
  );
}
