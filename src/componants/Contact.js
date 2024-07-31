import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
export default function Contact(props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    project: "",
    message: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    
    const { name, email, number, project, message } = formData;

    if (name === "") {
      setError("Name is required");
      e.preventDefault();
    } else if (email === "") {
      setError("Email is required");
      e.preventDefault();
    } else if (number === "") {
      setError("Phone number is required");
      e.preventDefault();
    } else if (project === "") {
      setError("Project type is required, e.g., Web developer");
      e.preventDefault();
    } else if (message === "") {
      setError("Detail about project is required");
      e.preventDefault();
    } else {
      setError("");
    }
  };
  return (
    <>
      <div className="contactMain">
        <h2>Lets Get Connect</h2>
        <p>And build something</p>
      </div>
      <div className="contactFormSection ">
        <h2>Ready to start your next project?</h2>

        <div className="formDiv ">
          <div className="socialContact">
            <h4>
              <span className="text-danger">Social</span> Links
            </h4>
            <div className="contactIcons">
              <Link to="https://www.instagram.com/zoh_aib.x/">
                <i className="fa-brands fa-instagram Icon" id="contactIcon"></i>
              </Link>
              <Link to="/">
                <i
                  className="fa-brands fa-linkedin-in Icon"
                  id="contactIcon"
                ></i>
              </Link>
              <Link className="email" to="mailto:businesswithzohaibt@gmail.com">
                <i className="fa-solid fa-envelope Icon" id="contactIcon"></i>
              </Link>
            </div>

            <div className="phoneSec">
              <i className="fa-solid fa-phone"></i>
              <Link className=" phone" to="https://wa.me/923022693044?">
                +923022693044
              </Link>
            </div>
          </div>

          <div className="mainForm">
            <form id="contactForm"onSubmit={handleSubmit}>
              <input type="text" placeholder="Full Name" id="name" name="name" autoComplete="off" onChange={handleChange} value={formData.name}/>
              <input type="text" placeholder="Email" id="email" name='email' autoComplete="off" onChange={handleChange} value={formData.email}/>
              <input type="number" placeholder="Phone Number" id="pNumber" name='number' autoComplete="off" onChange={handleChange} value={formData.number} />
              <input type="text" placeholder="Project type" id="prjType" name="project" autoComplete="off" onChange={handleChange} value={props.service}/>
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="8"
                autoComplete="off"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              {error && <p className="errorMsg">{error}</p>}
              <button type="submit" className="btn btn-outline-danger" >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
