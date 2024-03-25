import React, { useState } from "react";
import "../Subscribe letter/Subscribeletter.css";

function Subscribeletter() {
  const [email, setEmail] = useState("");

  const handleemail = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };
  return (
    <div>
      <div className="sectionGray">
        <div className="container">
          <div className="row">
            <h3 className="text-center newsInfo">
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
          </div>
          <form onSubmit={handleemail}>
            <input
              type="email"
              placeholder="Your Email Id"
              className="newsletterInfo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="newsletter_button">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscribeletter;
