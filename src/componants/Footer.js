import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <>
        <footer className=" mx-5 text-light footerTag">
        <div className="row">
          <div className="col-6 col-md-3 mb-3">
            <h2><strong className="text-danger">Z</strong>ohaib T.</h2>
            
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5 className="text-danger">Services</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/Services" className="nav-link p-0 footerNavLinks">
                  Web Development
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Services" className="nav-link p-0 footerNavLinks">
                  Shopify website design
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Services" className="nav-link p-0 footerNavLinks">
                  Wordpress Development
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Services" className="nav-link p-0 footerNavLinks">
                  Ul/Ux design
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <h5 className="text-danger">Quick Links</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="/" className="nav-link p-0 footerNavLinks">
                  home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Services" className="nav-link p-0 footerNavLinks">
                  Services
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/About" className="nav-link p-0 footerNavLinks">
                  About Me
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="/Contact" className="nav-link p-0 footerNavLinks">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-3 mb-3">
            <form>
              <h5 className="text-danger">Social Links</h5>
              <div className="d-flex  flex-sm-row w-100 gap-2">
                <Link to='https://www.instagram.com/zoh_aib.x/' target='_blank' ><i className="fa-brands fa-instagram text-light Icon" ></i></Link>
                <Link to='/'  ><i className="fa-brands fa-linkedin-in Icon"></i></Link>
                <Link className="email" to="mailto:businesswithzohaibt@gmail.com">< i className="fa-solid fa-envelope Icon"></i>
                </Link>
              </div>
            </form>
          </div>
          
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p className="text-center text-danger">Made by Zohaib Tariq</p> 
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-body-emphasis" to="/">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="/">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="/">
                <svg className="bi" width="24" height="24"></svg>
              </Link>
            </li>
            
          </ul>
          
          <ul>
            
            
          </ul>
        </div>
      </footer>
    </>
    
  )
}
