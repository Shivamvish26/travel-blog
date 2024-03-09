import React from "react";
import "../CSS/Main.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Card, Col, Button } from "antd";
import ganpatipule from "../Assets/Ganpatipule.jpg";
import Alibag from "../Assets/ALIBAG3.jpg";
import Harihareshwar from "../Assets/Harihareshwar-Beach-1024x601.webp";
import beach from "../Assets/beach.webp";
import lastlogo from "../Assets/last_logo.png.webp";

function Main() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <h3 className="textColor">
            FIND <span style={{ color: "#fdaa27" }}>POPULAR</span>
            <EnvironmentOutlined className="location-icon" />
          </h3>
          <h4 className="textColor">DESITINATIONS</h4>
          <h5 className="textColor">TAKE A LOOK AT THESE OFFERS</h5>
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
                <div class="button last_button" style={{ margin: "0" }}>
                  <a href="#" style={{ textAlign: "center" }}>
                    Book
                  </a>
                </div>
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
                <div class="button last_button" style={{ margin: "0" }}>
                  <a href="#" style={{ textAlign: "center" }}>
                    Book
                  </a>
                </div>
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
                <div class="button last_button" style={{ margin: "0" }}>
                  <a href="#" style={{ textAlign: "center" }}>
                    Book
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      <div className="section-gray">
        <div className="container">
          <div class="last_logo">
            <img src={lastlogo} />
          </div>
          <Row gutter={[16, 16]} style={{ marginTop: "30px" }}>
            <Col span={12}>
              <div class="last_item_content" style={{ margin: "-40px 0" }}>
                <div class="last_subtitle">GOA</div>
                <div class="last_percent">50%</div>
                <div class="last_title">Last Minute Offer</div>
                <div class="last_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla,
                  tempor vel.
                </div>
                <div class="button last_button">
                  <a href="#">See Offer</a>
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div class="last_item_content">
                <div class="last_subtitle">ANDAMAN AND NICOBAR ISLANDS</div>
                <div class="last_percent">50%</div>
                <div class="last_title">Last Minute Offer</div>
                <div class="last_text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla,
                  tempor vel.
                </div>
                <div class="button last_button">
                  <a href="#">See Offer</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <h2 className="text-center">POPULAR DESITINATIONS IN 2020</h2>
            <h4 className="text-center">TAKE A LOOK AT THE OFFERS</h4>
          </div>
          <div className="row mt-2">
            <div className="col">
              <img src={Alibag} alt="Image 1" className="img-thumbnail" />
            </div>
            <div className="col">
              <img src={Alibag} alt="Image 2" className="img-thumbnail" />
            </div>
            <div className="col">
              <img src={Alibag} alt="Image 3" className="img-thumbnail" />
            </div>
            <div className="col">
              <img src={Alibag} alt="Image 3" className="img-thumbnail" />
            </div>
            <div className="col">
              <img src={Alibag} alt="Image 3" className="img-thumbnail" />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col">
              <img src={Alibag} alt="Image 1" className="img-thumbnail" />
            </div>
            <div className="col">
              <img src={Alibag} alt="Image 2" className="img-thumbnail" />
            </div>
            <div className="col">
              <img src={Alibag} alt="Image 3" className="img-thumbnail" />
            </div>
            <div className="col">
              <img src={Alibag} alt="Image 3" className="img-thumbnail" />
            </div>
            <div className="col">
              <img src={Alibag} alt="Image 3" className="img-thumbnail" />
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="row">
            <h2 className="text-center">SPECIAL OFFERS</h2>
            <h4 className="text-center">TAKE A LOOK AT THE OFFERS</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
