import React from "react";
import "../CSS/Main.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Card, Col, Button } from "antd";
import ganpatipule from "../Assets/Ganpatipule.jpg";
import Alibag from "../Assets/ALIBAG3.jpg";
import Harihareshwar from "../Assets/Harihareshwar-Beach-1024x601.webp";
import beach from '../Assets/beach.webp'

function Main() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h3 className="textColor">
            FIND <span style={{ color: "#6b4642" }}>POPULAR</span>
            <EnvironmentOutlined className="location-icon" />
          </h3>
          <h4 className="textColor">DESITINATIONS</h4>
        </div>

        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={<img alt="example" src={ganpatipule} />}
            >
              <h3>Ganpatipule</h3>
              <h6>Konkan, Maharashtra</h6>
              <div className="card-footer">
                <h6>₹ 500/-</h6>
                <Button type="primary">Book</Button>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img alt="example" src={Alibag} style={{ height: "292px" }} />
              }
            >
              <h3>Alibaug</h3>
              <h6>Mumbai, Maharashtra </h6>
              <div className="card-footer">
                <h6>₹ 500/-</h6>
                <Button type="primary">Book</Button>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              style={{ width: "100%" }}
              cover={
                <img
                  alt="example"
                  src={Harihareshwar}
                  style={{ height: "292px" }}
                />
              }
            >
              <h3>Harihareshwar</h3>
              <h6>Raigad, Maharashtra </h6>
              <div className="card-footer">
                <h6>₹ 500/-</h6>
                <Button type="primary">Book</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="section-gray">
        <h2>Additional Section</h2>
        <Row gutter={[16, 16]} style={{marginTop: '30px'}}>
          <Col span={12}>
            <img src={beach} alt="example" style={{ width: "100%" }} />
          </Col>
          <Col span={12}>
            <h2>Text on the right side</h2>
            <p>This is the text on the right side.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Main;
