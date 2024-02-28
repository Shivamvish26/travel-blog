import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo-removebg-preview.png";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, DatePicker, Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';


const { Meta } = Card;
const { RangePicker } = DatePicker;
export default function Navbar() {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDateChange = (dates, dateStrings) => {
    setSelectedDates(dateStrings);
  };

  const handleSearch = () => {
    // Perform search using selected dates
    console.log("Selected dates:", selectedDates);
  };

  return (
    <div>
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div className="logo-text">
            <h1>Your Text Here</h1>
            <h2>The World</h2>
          </div>
          <div className="card-container">
            <Card className="centered-card">
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <Input
                    className="inputfields"
                    placeholder="Enter something"
                  />
                </Col>
                <Col span={6}>
                  <Input
                    className="inputfields"
                    placeholder="Enter something"
                  />
                </Col>
                <Col span={6}>
                  <RangePicker
                    className="inputfields"
                    onChange={handleDateChange}
                  />
                </Col>
                <Col span={6}>
                <Button
                    type="primary"
                    className="inputfields"
                    onClick={handleSearch}
                    icon={<SearchOutlined />}
                  />
                </Col>
              </Row>
            </Card>
          </div>
        </div>
        <nav className="navbar">
          <Link to="Main">Main</Link>
          <Link to="About">About</Link>
          <Link to="Thingtodo">Things to Do</Link>
          <Link to="Placetostay">Places to Stay</Link>
          {/* <Link to='Login'>Login</Link> */}
        </nav>
      </div>
    </div>
  );
}
