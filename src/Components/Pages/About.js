import React from "react";
import "../CSS/About.css";
import lady from "../Assets/lady.jpg";
import camera from "../Assets/camera.jpg";
import Counter from "./Counter";
import Alibag from "../Assets/ALIBAG3.jpg";

function About() {
  const numbers = [0, 1, 2, 3];

  return (
    <div className="container">
      <div className="row">
        <h1 className="heading">
          Hey There! Come Along On Adventures With Me - A Wanderer At Heart,
          Exploring Countries Around The World From A Very Young Age.
        </h1>
        <div className="col-md-6" style={{ position: "relative" }}>
          <img src={lady} alt="lady" className="img-fluid lady" />
          <img src={camera} alt="camera" className="img-fluid camera" />
        </div>
        <div className="col-md-6">
          <div style={{ marginTop: "180px" }}>
            <p className="note">
              Welcome to my travel blog, TravelBee, where I share all my
              adventurous experiences and travel expertise from years of
              traveling around the globe since I was a child of only 15.
            </p>
            <p className="note">
              To date, I have visited over 56 countries worldwide, all of which
              have been documented and photographed in my detailed blog posts
              and videos over the previous ten years and shared with my 50,000+
              loving followers, like you. Whether you're a first-time traveler
              or a seasoned wanderer like me, check out my content for tips,
              hacks, and more to help and inspire your next vacation.
            </p>
            <p className="name">Vishwakarma</p>
            <p className="note">Travel Blogger & Photographer</p>
            <button className="animated-button" style={{ top: "20px" }}>
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
        </div>
      </div>

      <div className="section light-blue-bg">
  <div className="container">
    <h2 className="text center text-head" style={{ marginTop: "128px" }}>
      Our Achievements
    </h2>
    <p className="text center notes">
      This is a great site for everything around the home, and it also has a
      useful You can see the best products in each category and they even to
      back up he information they are giving you.
    </p>
    <div className="row">
      <div className="numbers">
        <Counter number={100} title="Posts" />
        <Counter number={517} title="Followers" />
        <Counter number={400} title="Following" />
      </div>
    </div>
  </div>
</div>


      <div className="container" style={{marginBottom:'3%'}}>
        <div className="row">
          <h2 className="line-text">
            I Think Your Favorite Destinations I’ll Show
          </h2>
          <p className="text center notes">56 STATES AND 412 LOCATIONS</p>
          <div className="col-md-2">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={Alibag} alt="Card Image" className="card-image" />
                </div>
                <div className="back">
                  <p className="description">Ganpatipule </p>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Know More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={Alibag} alt="Card Image" className="card-image" />
                </div>
                <div className="back">
                  <p className="description">Alibag </p>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Know More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={Alibag} alt="Card Image" className="card-image" />
                </div>
                <div className="back">
                  <p className="description">Harihareshwar </p>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Know More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={Alibag} alt="Card Image" className="card-image" />
                </div>
                <div className="back">
                  <p className="description">Gorakhpur </p>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Know More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={Alibag} alt="Card Image" className="card-image" />
                </div>
                <div className="back">
                  <p className="description">Lucknow </p>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Know More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="card">
              <div className="content">
                <div className="front">
                  <img src={Alibag} alt="Card Image" className="card-image" />
                </div>
                <div className="back">
                  <p className="description">Basti </p>
                  <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                      <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Know More</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default About;
