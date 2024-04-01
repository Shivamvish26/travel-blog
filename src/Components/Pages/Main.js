import React, { useState } from "react";
import "../CSS/Main.css";
import { EnvironmentOutlined } from "@ant-design/icons";
import { Row, Card, Col, Button } from "antd";
import ganpatipule from "../Assets/Ganpatipule.jpg";
import Alibag from "../Assets/ALIBAG3.jpg";
import Harihareshwar from "../Assets/Harihareshwar-Beach-1024x601.webp";
import beach from "../Assets/beach.webp";
import lastlogo from "../Assets/last_logo.png.webp";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Main() {
  // const [email, setEmail] = useState('');

  // const handleemail =(e)=>{
  //   e.preventDefault();
  //   console.log(email)
  //   setEmail('');
  // }
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
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">Book</span>
                  <span className="circle" />
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
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
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">Book</span>
                  <span className="circle" />
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
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
                <button className="animated-button">
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-2"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                  <span className="text">Book</span>
                  <span className="circle" />
                  <svg
                    viewBox="0 0 24 24"
                    className="arr-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" />
                  </svg>
                </button>
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
              <div class="last_item_content" style={{ margin: "-39px 0" }}>
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
              <div class="last_item_content" style={{ margin: "-39px 0" }}>
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
            <h2 className="text-center">POPULAR DESTINATIONS IN 2020</h2>
            <h4 className="text-center">TAKE A LOOK AT THE OFFERS</h4>
          </div>
          <div className="row mt-2">
            <div className="col-md-3">
              <div className="img-container">
                <img src={Alibag} alt="Image 1" className="img-thumbnail" />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-container">
                <img src={Alibag} alt="Image 1" className="img-thumbnail" />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-container">
                <img src={Alibag} alt="Image 1" className="img-thumbnail" />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-container">
                <img src={Alibag} alt="Image 1" className="img-thumbnail" />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-3">
              <div className="img-container">
                <img src={Alibag} alt="Image 1" className="img-thumbnail" />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-container">
                <img src={Alibag} alt="Image 1" className="img-thumbnail" />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-container">
                <img src={Alibag} alt="Image 1" className="img-thumbnail" />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="img-container">
                <img src={Alibag} alt="Image 1" className="img-thumbnail" />
                <div className="overlay">
                  <div className="text">Hello World</div>
                </div>
              </div>
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
        <OwlCarousel
          items={4}
          className="owl-theme mt-2"
          loop
          nav
          margin={8}
          autoplay
        >
          <div>
            <img className="img" src={Alibag} />
          </div>
          <div>
            <img className="img" src={Alibag} />
          </div>
          <div>
            <img className="img" src={Alibag} />
          </div>
          <div>
            <img className="img" src={Alibag} />
          </div>
          <div>
            <img className="img" src={Alibag} />
          </div>
          <div>
            <img className="img" src={Alibag} />
          </div>
          <div>
            <img className="img" src={Alibag} />
          </div>
        </OwlCarousel>
      </div>

      {/* <div className="sectionGray">
        <div className="container">
          <div className="row">
            <h3 className="text-center newsInfo">SUBSCRIBE TO OUR NEWSLETTER</h3>
          </div>
         <form onSubmit={handleemail}>
         <input
          type="email"
          placeholder="Your Email Id"
          className="newsletterInfo"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <button type="submit" className="newsletter_button">Subscribe</button>
         </form>
        </div>
      </div> */}
    </div>
  );
}

export default Main;
