import React from "react";
import "./Splash.css";

function Splash() {
  return (
    <div className="splash-container">
      <div className="main-container">
        <h1 className="title">LiquidLogged</h1>
        <p className="description">
          LiquidLogged is a liquid consumption tracking app that logs a user's
          drinking habits. Users record the type of drink and amount consumed
          and receive a detailed drinking pattern breakdown which can be sorted
          by day, week, or month.
        </p>
        {/* <nav className="nav-start">
          <ul>
            <li className="start-button">
              Get Started
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </nav> */}
      </div>

      <div className="splash-pictures">
        <div className="splash-pic">
          <div className="top-splash-pic">
            <div className="pic-text">
              Users simply add their liquids for the day
            </div>
            <div className="pic">
              <img src="https://i.imgur.com/HkcccPH.png" alt='cup'></img>
            </div>
            
          </div>
        </div>
        <div className="splash-pic">
          <div className="bottom-splash-pic">
          <div className="pic">
            <img src="https://i.imgur.com/kuc4Gmj.png" alt='graphs'></img>
          </div>
            <div className="pic-text">
              {" "}
              And receive a complete breakdown of all liquids consumed{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="meet-text">Meet The Team</div>
        <div className="about-row">
          <div className="profile-container">
            <div className="profile-name">Andy Le</div>
            <img
              src="https://i.imgur.com/nvi7asW.jpg"
              className="profile-picture"
              alt='profile-pic'
            ></img>
            <div className="contact">
              <a href="https://www.linkedin.com/in/andyhongle/" target="_blank" className="linked-container">
                <img
                  src="https://i.imgur.com/jCC5zF3.png"
                  className="icon"
                  alt='linkedin-icon'
                ></img>
                {/* <div className="icon-text">LinkedIn</div> */}
              </a>
              <a
                target="_blank"
                href="https://github.com/andyhongle"
                className="github-container"
              >
                <img
                  src="https://i.imgur.com/UmrhMNR.png"
                  className="icon"
                  alt='github-icon'
                ></img>
                {/* <div className="icon-text">Github</div> */}
              </a>
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-name">Alex Zhou</div>
            <img
              src="https://i.imgur.com/SYEPdg4.jpg"
              className="profile-picture"
              alt='profile-pic'
            ></img>

            <div className="contact">
              <a
                href="https://www.linkedin.com/in/alex-zhou-ba3614148/"
                target="_blank"
                className="linked-container"
              >
                <img
                  src="https://i.imgur.com/jCC5zF3.png"
                  className="icon"
                  alt='linkedin-icon'
                ></img>
                {/* <div className="icon-text">LinkedIn</div> */}
              </a>
              <a
                href="https://github.com/alexzhou415"
                className="github-container"
                target="_blank"
              >
                <img
                  src="https://i.imgur.com/UmrhMNR.png"
                  className="icon"
                  alt='github-icon'
                ></img>
                {/* <div className="icon-text">Github</div> */}
              </a>
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-name">Lin Yuan</div>
            <img
              src="https://i.imgur.com/zwbqwSs.jpg"
              className="profile-picture"
              alt='profile-pic'
            ></img>

            <div className="contact">
              <a
                href="https://www.linkedin.com/in/lin-yuan-3a9915154/"
                className="linked-container"
                target="_blank"
              >
                <img
                  src="https://i.imgur.com/jCC5zF3.png"
                  className="icon"
                  alt='linkedin-icon'
                ></img>
                {/* <div className="icon-text">LinkedIn</div> */}
              </a>
              <a
                href="https://github.com/aladdin731"
                className="github-container"
                target="_blank"
              >
                <img
                  src="https://i.imgur.com/UmrhMNR.png"
                  className="icon"
                  alt='github-icon'
                ></img>
                {/* <div className="icon-text">Github</div> */}
              </a>
            </div>
          </div>
          <div className="profile-container">
            <div className="profile-name">Sky Kumtong</div>
            <img
              src="https://i.imgur.com/dBxVH7s.jpg"
              className="profile-picture"
              alt=''
            ></img>

            <div className="contact">
              <a
                href="https://www.linkedin.com/in/skykumtong/"
                className="linked-container"
                target="_blank"
              >
                <img
                  src="https://i.imgur.com/jCC5zF3.png"
                  className="icon"
                  alt=''
                ></img>
                {/* <div className="icon-text">LinkedIn</div> */}
              </a>
              <a
                href="https://github.com/skygit97"
                className="github-container"
                target="_blank"
              >
                <img
                  src="https://i.imgur.com/UmrhMNR.png"
                  className="icon"
                  alt=''
                ></img>
                {/* <div className="icon-text">Github</div> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Splash;
