import React from "react";
import './Navbar.css'
import logo from '../Assets/logo-removebg-preview.png'
import { Link } from "react-router-dom";

 export default function Navbar(){
    return<div>
        <div className="navbar-container">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="navbar">
                <Link to='Main'>Main</Link>
                <Link to='About'>About</Link>
                <Link to='Thingtodo'>Things to Do</Link>
                <Link to='Placetostay'>Places to Stay</Link>
                <Link to='Login'>Login</Link>
            </nav>
        </div>
    </div>
}