import React, { useState } from "react";
import "../CSS/Contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

function ContactUs() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [contactError, setContactError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && validateContact(contact)) {
      console.log(firstname, lastname, email, contact, message);
      // Clear the form fields after submission
      setFirstname("");
      setLastname("");
      setEmail("");
      setContact("");
      setMessage("");
      setEmailError("");
      setContactError("");
    } else {
      if (!validateEmail(email)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError("");
      }
      if (!validateContact(contact)) {
        setContactError("Invalid phone number");
      } else {
        setContactError("");
      }
    }
  };

  const validateEmail = (email) => {
    const re =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const validateContact = (contact) => {
    const re =
      /^[0-9]{10}$/;
    return re.test(String(contact));
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "47px" }}>
            <h2>Contact Information</h2>
            <p className="contact-info">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
              eveniet aperiam maiores consequuntur voluptatem sed.
            </p>
            <div style={{ marginTop: "24px" }}>
              <div className="contact-info">
                <FaMapMarkerAlt className="icon" />
                <p className="loc" style={{ marginBottom: "0" }}>
                  Pune, Maharashtra, India
                </p>
              </div>
              <hr className="line" />
              <div className="contact-info">
                <FaPhone
                  className="icon"
                  style={{ transform: "rotate(100deg)" }}
                />
                <p style={{ marginBottom: "0" }}>9876654321</p>
              </div>
              <hr className="line" />
              <div className="contact-info">
                <FaEnvelope className="icon" />
                <p style={{ marginBottom: "0" }}>example@example.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 text center">
            <h2>Contact Us</h2>
            <form className="form" onSubmit={handleSubmit}>
              <label>
                <input
                  required=""
                  placeholder="First Name"
                  type="text"
                  className="input"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </label>
              <label>
                <input
                  required=""
                  placeholder="Last Name"
                  type="text"
                  className="input"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </label>
              <label>
                <input
                  required=""
                  placeholder="Email"
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              {emailError && <p className="error" style={{color:'red'}}>{emailError}</p>}
              <label>
                <input
                  required=""
                  type="text"
                  placeholder="Contact Number"
                  className="input"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </label>
              {contactError && <p className="error" style={{color:'red'}}>{contactError}</p>}
              <label>
                <textarea
                  required=""
                  rows={3}
                  placeholder="Message"
                  className="input01"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>
              <button className="fancy" type="submit">
                <span className="top-key" />
                <span className="text">submit</span>
                <span className="bottom-key-1" />
                <span className="bottom-key-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
