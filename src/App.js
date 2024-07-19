import React, { useEffect, useRef, useState } from "react";
import "./app.scss";

const App = () => {
  const [megaMenu, setMegaMenu] = useState(false);

  const [visibleService, setVisibleService] = useState(false);
  const refService = useRef(null);

  console.log(visibleService);

  useEffect(() => {
    //lăn chuột
    const handleScroll = () => {
      const targetPositionService =
        refService.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight - 100; // Điều kiện có thể thay đổi tại đây

      if (targetPositionService < screenPosition) {
        setVisibleService(true);
      } else {
        setVisibleService(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            <a href="#service">Service</a>
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
            <a href="#service">Service</a>
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
              <li>Web design professional</li>
              <li>Software development service</li>
              <li>Connect developer over on the world</li>
            </ul>
            <button>
              <a href="tel:+84909240886">
                <i className="fa-solid fa-phone"></i> Call me
              </a>
            </button>
          </div>
        </div>
      </div>
      <div id="service" ref={refService}>
        <h1>
          <i className="fa-solid fa-screwdriver-wrench"></i> Services
        </h1>
        <div className="content">
          <div className={visibleService ? "fontend moveLFX" : "fontend"}>
            <h2>
              <i className="fa-solid fa-desktop"></i> Font-end
            </h2>
            <ul>
              <li>Graphic design</li>
              <li>Ui/Ux</li>
              <li>HTML5/CSS3</li>
              <li>JavaScript</li>
              <li>ReactJs</li>
            </ul>
          </div>
          <div className={visibleService ? "backend moveFX" : "fontend"}>
            <h2>
              <i className="fa-solid fa-gears"></i> Back-end
            </h2>
            <ul>
              <li>Resfull API</li>
              <li>Websocket</li>
              <li>AWS</li>
              <li>NestJS</li>
              <li>Prisma</li>
              <li>SQL, MonggoDB</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="contact">
        <div className="content">
          <div className="contactItem">
            <div className="contactIcon">
              <a href="https://facebook.com/buunhut">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
            <div className="contactIcon">
              <i className="fa-brands fa-twitter"></i>
            </div>
            <div className="contactIcon">
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className="contactItem">
            <p>
              <i className="fa-solid fa-house"></i>
              <a href="https://nodejs.edu.vn"> nodejs.edu.vn</a>
            </p>

            <p>
              <i className="fa-solid fa-envelope"></i>{" "}
              <a href="mailto:nhut.nta@gmail.com">nhut.nta@gmail.com</a>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i>{" "}
              <a href="tel:+84909240886">(+84) 909 240 886</a>
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i> Ho Hoc Lam, An Lac,
              Binh Tan, Ho Chi Minh
            </p>
          </div>
          <div className="contactItem map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15681.070715464324!2d106.6111144!3d10.7138251!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752df3de1ad425%3A0x10d863fa93cb9d64!2sBlock%20A8%2C%20CC%20Ehome%203!5e0!3m2!1sen!2s!4v1721388458489!5m2!1sen!2s"
              loading="lazy"
              zoom="20"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
