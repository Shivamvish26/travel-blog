import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, DatePicker, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Meta } = Card;
const { RangePicker } = DatePicker;

export default function Navbar() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [place, setPlace] = useState("");
  const [destination, setDestination] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleDateChange = (dates, dateStrings) => {
    setSelectedDates(dateStrings);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Select Place is", place);
    console.log("Select Destination is", destination);
    console.log("Selected dates:", selectedDates);
    console.log("Min price is:", minPrice);
    console.log("Max price is:", maxPrice);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div class="home_text_large">discover</div>
          <div class="home_text_small">Discover new worlds</div>
        </div>
        <nav className="navbar">
          <Link to="/">Main</Link>
          <Link to="About">About</Link>
          <Link to="Thingtodo">Things to Do</Link>
          <Link to="Placetostay">Places to Stay</Link>
          <Link to="Login">Login</Link>
          {/* New Link on the right-hand side */}
          <Link to="Contact">Contact</Link>
        </nav>
      </div>
    </div>
  );
}
