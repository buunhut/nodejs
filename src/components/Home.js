import React from "react";

const Home = () => {
  return (
    <div id="home">
      <div className="content">
        <div className="homeIcon">
          <i className="fa-solid fa-code"></i>
        </div>
        <div className="homeItem">
          <h1>
            <i>nodejs</i>
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
  );
};

export default Home;
