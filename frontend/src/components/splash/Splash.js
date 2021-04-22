import React from "react";
import "./Splash.css";

function Splash() {

  return (
    <div className="splash-container">
      <div className="main-container">
        <h1 className="title">Liquid Logged</h1>
        <p className="description">
          Liquid Logged is a liquid consumption tracking app that logs a user's
          drinking habits. Users record the type of drink and amount consumed
          and receive a detailed drinking pattern breakdown which can be sorted
          by day, week, or month.
        </p>
      </div>
      <div className="splash-pictures">
        <div className="splash-pic">
          <img src="https://puu.sh/HA9k8/2e996773fc.png"></img>
        </div>
        <div className="splash-pic">
          <img src="https://puu.sh/HA9k8/2e996773fc.png"></img>
        </div>
      </div>
      <div className="about-container">
        <div className="meet-text">Meet The Team</div>
        <div className="about-row">
          <div className="profile-container">
            <div className="profile-name">Andy Le</div>
            <img
              src="https://puu.sh/HAhMl/fe262e6fd9.png"
              className="profile-picture"
            ></img>

            <a href="#" className="linked-container">
              <img
                src="https://puu.sh/HAhCs/9a89eb922a.png"
                className="icon"
              ></img>
              <div className="icon-text">LinkedIn</div>
            </a>
            <a
              href="https://github.com/andyhongle"
              className="github-container"
            >
              <img
                src="https://puu.sh/HAhHn/48d0e044c5.png"
                className="icon"
              ></img>
              <div className="icon-text">Github</div>
            </a>
          </div>

          <div className="profile-container">
            <div className="profile-name">Alex Zhou</div>
            <img
              src="https://puu.sh/HAhMl/fe262e6fd9.png"
              className="profile-picture"
            ></img>

            <a href="#" className="linked-container">
              <img
                src="https://puu.sh/HAhCs/9a89eb922a.png"
                className="icon"
              ></img>
              <div className="icon-text">LinkedIn</div>
            </a>
            <a href="#" className="github-container">
              <img
                src="https://puu.sh/HAhHn/48d0e044c5.png"
                className="icon"
              ></img>
              <div className="icon-text">Github</div>
            </a>
          </div>
        </div>
        <div className="about-row">
          <div className="profile-container">
            <div className="profile-name">Lin Yuan</div>
            <img
              src="https://puu.sh/HAhMl/fe262e6fd9.png"
              className="profile-picture"
            ></img>

            <a href="#" className="linked-container">
              <img
                src="https://puu.sh/HAhCs/9a89eb922a.png"
                className="icon"
              ></img>
              <div className="icon-text">LinkedIn</div>
            </a>

            <a href="#" className="github-container">
              <img
                src="https://puu.sh/HAhHn/48d0e044c5.png"
                className="icon"
              ></img>
              <div className="icon-text">Github</div>
            </a>
          </div>
          <div className="profile-container">
            <div className="profile-name">Sky Kumtong</div>
            <img
              src="https://puu.sh/HAhMl/fe262e6fd9.png"
              className="profile-picture"
            ></img>

            <a href="#" className="linked-container">
              <img
                src="https://puu.sh/HAhCs/9a89eb922a.png"
                className="icon"
              ></img>
              <div className="icon-text">LinkedIn</div>
            </a>

            <a href="#" className="github-container">
              <img
                src="https://puu.sh/HAhHn/48d0e044c5.png"
                className="icon"
              ></img>
              <div className="icon-text">Github</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
