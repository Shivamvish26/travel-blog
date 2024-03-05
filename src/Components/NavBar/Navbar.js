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

  const handleDateChange = (dates, dateStrings) => {
    setSelectedDates(dateStrings);
  };

  const [place, setPlace] = useState("");
  const [destination, setDestination] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Select Place is", place);
    console.log("Select Destination is", destination);
    console.log("Selected dates:", selectedDates);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div className="logo-text">
            <h1>Fall down seven times and </h1>
            <h2>Stand up eight.</h2>
          </div>
          <div className="card-container">
            <Card className="centered-card">
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Input
                    className="inputfields"
                    placeholder="Enter Place"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </Col>
                <Col span={8}>
                  <Input
                    className="inputfields"
                    placeholder="Enter Destination"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </Col>
                <Col span={6}>
                  <RangePicker
                    className="inputfields"
                    onChange={handleDateChange}
                  />
                </Col>
                <Col span={2}>
                  <Button
                    type="primary"
                    className="inputfields"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Col>
              </Row>
            </Card>
          </div>
        </div>
        <nav className="navbar">
          <Link to="/">Main</Link>
          <Link to="About">About</Link>
          <Link to="Thingtodo">Things to Do</Link>
          <Link to="Placetostay">Places to Stay</Link>
          <Link to='Login'>Login</Link>
        </nav>
      </div>
    </div>
  );
}
