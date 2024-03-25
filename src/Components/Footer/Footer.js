import React from "react";
import "../Footer/Footer.css";
import logo from "../Assets/logo-removebg-preview.png";
import Alibag from "../Assets/ALIBAG3.jpg";

function CustomFooter() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <img src={logo} className="travelimg" />
              <div className="logo-text">
                <p className="text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer pulvinar sed mauris eget tincidunt. Sed lectus nulla,
                  tempor vel eleifend quis, tempus rut rum metus. Pellentesque
                  ultricies enim eu quam fermentum hendrerit.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h4 className="text-white" style={{ margin: "100px 0 0 0" }}>
                  Latest News
                </h4>
                <div className="news-images mt-3">
                  <div className="image-with-text">
                    <img src={Alibag} alt="News Image 1" />
                    <span className="image-text">Text 1</span>
                  </div>
                  <div className="image-with-text">
                    <img src={Alibag} alt="News Image 2" />
                    <span className="image-text">Text 2</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <h4 className="text-white" style={{ margin: "100px 0 0 0" }}>
                  Tags
                </h4>
                <div className="tags mt-3">
                  <a href="#" className="tag">
                    Tag 1
                  </a>
                  <a href="#" className="tag">
                    Tag 2
                  </a>
                  <a href="#" className="tag">
                    Tag 3
                  </a>
                  <a href="#" className="tag">
                    Tag 4
                  </a>
                </div>
                <div className="tags mt-3">
                  <a href="#" className="tag">
                    Tag 5
                  </a>
                  <a href="#" className="tag">
                    Tag 6
                  </a>
                  <a href="#" className="tag">
                    Tag 7
                  </a>
                  <a href="#" className="tag">
                    Tag 8
                  </a>
                </div>
                <div className="tags mt-3">
                  <a href="#" className="tag">
                    Tag 9
                  </a>
                  <a href="#" className="tag">
                    Tag 10
                  </a>
                  <a href="#" className="tag">
                    Tag 11
                  </a>
                  <a href="#" className="tag">
                    Tag 12
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CustomFooter;
