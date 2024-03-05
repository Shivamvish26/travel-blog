import React, { useState } from "react";
import "../CSS/Login.css";
import swal from "sweetalert";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleValidate = (e) => {
    e.preventDefault();
    if (username === "reactjs12@gmail.com" && password === "123456") {
      swal("Succesful Login", "Welcome ReactJS", "success");
      window.location.href = "/";
    } else {
      swal("Wrong Credentials", "Please try again", "error");
    }
  };

  return (
    <div className="login-cover">
      <div className="loginsignup-container">
        <h2 style={{ color: "white" }}>Welcome to Tours & Travel</h2>
        <form onSubmit={handleValidate}>
          <div className="loginsignup-fields">
            <input
              type="email"
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login In</button>
          </div>
        </form>
        <p className="loginsignup-login">
          Don't have an account ? <span>Signup here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p style={{ color: "white" }}>
            By Continuing, I Agree to the terms and conditions.
          </p>
        </div>
      </div>
    </div>
  );
}
