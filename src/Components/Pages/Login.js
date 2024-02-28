import React from "react";
import '../CSS/Login.css'
import { Link } from "react-router-dom";

 export default function Login(){
    return<div className="login-cover">
        <h1>Login Page</h1>
        <Link to="/Main">
                <button>Login</button>
            </Link>
    </div>
}