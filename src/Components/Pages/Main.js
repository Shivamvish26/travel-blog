import React from "react";
import "../CSS/Main.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Card, Col } from "antd";
import ganpatipule from '../Assets/Ganpatipule.jpg'
import Alibag from '../Assets/ALIBAG3.jpg'
import Harihareshwar from '../Assets/Harihareshwar-Beach-1024x601.webp'
function Main() {
  return (
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
            <h6>Konkan, Maharashtra </h6>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src={Alibag} style={{height: '292px'}}/>}
          >
            <h3>Alibaug</h3>
            <h6>Mumbai, Maharashtra </h6>
          </Card>
        </Col>
        <Col span={8}>
          <Card
            hoverable
            style={{ width: "100%" }}
            cover={<img alt="example" src={Harihareshwar} style={{height: '292px'}}/>}
          >
             <h3>Harihareshwar</h3>
            <h6>Raigad, Maharashtra </h6>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Main;
