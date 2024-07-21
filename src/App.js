import React, { useEffect, useRef, useState } from "react";
import "./app.scss";
import Service from "./components/Service";
import Contact from "./components/Contact";
import OutTeam from "./components/OutTeam";

const App = () => {
  const [megaMenu, setMegaMenu] = useState(false);

  useEffect(() => {
    if (megaMenu) {
      document.body.scrollTop = 0;

      //khoá scroll

      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [megaMenu]);

  return (
    <div id="container">
      <div className="menu">
        <div className="icon">
          <i
            className="fa-solid fa-bars"
            onClick={() => setMegaMenu(!megaMenu)}
          ></i>
        </div>
        <div className="circle"></div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#service">Skills</a>
          </li>
          <li>
            <a href="#ourTeam">Our Teams</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="megaMenu" style={{ height: megaMenu ? "100vh" : 0 }}>
        <ul>
          <li onClick={() => setMegaMenu(!megaMenu)}>
            <i className="fa-solid fa-xmark close opacity"></i>
          </li>
          <li onClick={() => setMegaMenu(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setMegaMenu(false)}>
            <a href="#service">Skills</a>
          </li>
          <li onClick={() => setMegaMenu(false)}>
            <a href="#ourTeam">Our Teams</a>
          </li>
          <li onClick={() => setMegaMenu(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div id="home">
        <div className="content">
          <div className="homeIcon">
            <i className="fa-solid fa-code"></i>
          </div>
          <div className="homeItem">
            <h1>
              <i>nodejs.edu.vn</i>
            </h1>
            <ul>
              <li>Web design professional service</li>
              <li>Software development service</li>
              <li>Working as a freelance developer</li>
              <li>Support new developer has trouble</li>
            </ul>
            <button>
              <a href="tel:+84909240886">
                <i className="fa-solid fa-phone"></i> Call me
              </a>
            </button>
          </div>
        </div>
      </div>
      <Service />
      <OutTeam />
      {/* <div id="video">
        <video autoPlay controls muted>
          <source src="./img/video.mp4" type="video/mp4" />
        </video>
      </div> */}
      <Contact />
      <footer>
        <span>
          <a href="https://nodejs.edu.vn">nodejs.edu.vn</a> - Copyright 2024
        </span>
      </footer>
    </div>
  );
};

export default App;
