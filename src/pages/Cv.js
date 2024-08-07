import React, { useEffect, useState } from "react";
import { QRCode, Space, message, Tooltip } from "antd";
import moment from "moment";
import "./cv.scss";
import { useNavigate } from "react-router-dom";

const Cv = () => {
  const [dark, setDark] = useState(false);
  const [luotTruyCap, setLuotTruyCap] = useState(1);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const yourTimeZone = "Asia/Ho_Chi_Minh";

  //in
  const handlePrint = () => {
    window.print();
  };

  //chuyển mode
  // const handleDarkMode = () => {
  //   setDark(!dark);
  //   localStorage.setItem("darkMode", JSON.stringify(!dark));
  //   document.body.classList.toggle("dark");
  // };

  const handleBackToTop = () => {
    // Cuộn lên đầu trang khi nút được click
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const phoneNumber = "0909240886"; // Thay thế bằng số điện thoại của bạn
  const openZaloChat = () => {
    window.open(`https://zalo.me/${phoneNumber}`, "_blank");
  };

  useEffect(() => {
    handleBackToTop();
    const theme = JSON.parse(localStorage.getItem("theme"));
    setDark(theme);

    if (theme) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  const handleDarkTheme = () => {
    localStorage.setItem("theme", !dark);
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const year = moment().format("YYYY");
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div id="MyCv">
        <header>
          <div className="content">
            <div>
              <h3>
                <i className="fa-solid fa-print" onClick={handlePrint}></i>
              </h3>
              <div className="flip-container" onClick={handleHome}>
                <div className="flip-card">
                  <div className="flip-card-inner">
                    <div className="flip-card-front">nodejs.edu.vn</div>
                    <div className="flip-card-back">nodejs.edu.vn</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {dark ? (
                <button onClick={handleDarkTheme}>
                  <i className="fa-regular fa-sun"></i>
                </button>
              ) : (
                <button onClick={handleDarkTheme}>
                  <i className="fa-regular fa-moon"></i>
                </button>
              )}
            </div>
          </div>
        </header>
        <main>
          <div className="title">
            <h2>
              <i className="fa-solid fa-address-card"></i> Information
            </h2>
          </div>
          <div className="info">
            <div className="photo">
              <img src="img/photo.png" alt="3x4" />
              {/* qr code */}
              <Space className="qrCode">
                <QRCode value={"http://nodejs.edu.vn"} status="active" />
              </Space>
            </div>
            <div className="text">
              <div className="textFlex">
                <p className="info">
                  <i className="fa-solid fa-user"></i>
                </p>{" "}
                <h4>Truong Buu Nhut</h4>
              </div>
              <div className="textFlex">
                <p className="info">
                  <i className="fa-regular fa-calendar-days"></i>
                </p>{" "}
                <h4>24/08/1986</h4>
              </div>
              <div className="textFlex">
                <p className="info">
                  <i className="fa-solid fa-location-dot"></i>
                </p>{" "}
                <h4>Binh Tan District, Ho Chi Minh City, VietNam</h4>
              </div>
              <div className="textFlex">
                <p className="info">
                  <i className="fa-solid fa-phone"></i>
                </p>{" "}
                <h4>
                  <a href="tel:+84909240886">(+84) 909 240 886</a>
                </h4>
              </div>
              <div className="textFlex">
                <p className="info">
                  <i className="fa-solid fa-envelope"></i>
                </p>{" "}
                <h4>
                  <a href="mailto:nhut.nta@gmail.com">nhut.nta@gmail.com</a>
                </h4>
              </div>
              <div className="textFlex">
                <p className="info">
                  <i className="fa-brands fa-facebook"></i>
                </p>{" "}
                <h4>
                  <a href="https://facebook.com/buunhut">
                    facebook.com/buunhut
                  </a>
                </h4>
              </div>
              <div className="textFlex">
                <p className="info">
                  <i className="fa-solid fa-globe"></i>
                </p>{" "}
                <h4>
                  <a href="http://www.nodejs.edu.vn/buunhut">
                    nodejs.edu.vn/buunhut
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <h3>Web Developer</h3>
        </main>
        <main>
          <div className="title">
            <h2>
              <i className="fa-solid fa-circle-info"></i> Summary
            </h2>
          </div>
          <div className="info">
            <p>
              I am a full-stack web developer, full of enthusiasm and
              responsibility for my work. Eager to learn and absorb new
              knowledge to improve my skills. My hard work and dedication will
              contribute positively to any project I am involved in.
            </p>
          </div>
        </main>
        <main>
          <div className="title">
            <h2>
              <i className="fa-solid fa-graduation-cap"></i> Certificate
            </h2>
          </div>
          <ul>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <p>01/03/2023</p>{" "}
                    <h4>Learned and graduated Fontend course at CycberSoft.</h4>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <p>01/09/2023</p>{" "}
                    <h4>Learned and graduated Backend course at CycberSoft.</h4>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </main>
        <main>
          <div className="title">
            <h2>
              <i className="fa-solid fa-gear"></i> Skills
            </h2>
          </div>
          <ul>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <p>Fontend:</p>{" "}
                    <h4>
                      ReactJS, JavaScript, HTML-5, CSS-3, SCSS, Responsive,...
                    </h4>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <p>Backend:</p>{" "}
                    <h4>
                      NodeJS, NestJS, ExpressJS, RESTful API, Swagger, MySQL,
                      Docker, VPS, Hosting, Domain,...
                    </h4>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <p>Libraries:</p>{" "}
                    <h4>
                      Ant-design, Tailwind, BootStrap, Axios, Redux, Prisma,
                      Sequelize,...
                    </h4>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <p>English:</p>{" "}
                    <h4>
                      Conversation, read and understand technical doccument.
                    </h4>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </main>
        <main>
          <div className="title">
            <h2>
              <i className="fa-solid fa-file"></i> Real-Project
            </h2>
          </div>
          <ul>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <h4>
                      <b>1/ My CV</b> <i>(Personal use).</i>
                      <br />
                      <b>User interface:</b> <br />+ Show infomation, dark
                      theme, light theme, English, Print CV. <br></br>+
                      Responsive web, amination css. Only code fontend. <br />
                      Link:{" "}
                      <a href="https://nodejs.edu.vn/buunhut" className="link">
                        https://nodejs.edu.vn/buunhut
                      </a>
                    </h4>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <h4>
                      <b>2/ Online, offline Sales website</b>{" "}
                      <i>(Code by customer requirements).</i> <br />
                      <b>User interface:</b> <br />+ Sign in, log in, log out,
                      order. <br></br>+ Search products. <br></br>+ Add to cart,
                      increase or decrease quantity, delete from cart. <br></br>
                      + Confirm orders, cancel orders, track status. <br></br>+
                      Accumulated amount, paid by accumulated wallet. <br></br>
                      <b>Admin interface:</b> <br />+ Create products{" "}
                      <i>
                        (add, edit, delete, manage: import price, selling price,
                        discount, unit, inventory, order limit,...).
                      </i>{" "}
                      <br></br>+ Online orders management: process orders,
                      change status, select delivery staff, automatically
                      subtract or add inventory,... <br></br>+ Offline sales
                      management: importing goods, exporting goods, payment
                      suggestions, adding and subtracting inventory,...{" "}
                      <br></br>+ Debt management: revenue reporting by date,
                      customer, product,... <br></br>+ Parnerts management:
                      manage suppliers, customers, and employees. <br></br>
                      + Configuration: temporary off, shipping fee, customer
                      refund percentage,... <br />+ Code both fontend and
                      backend alone by my-self. <br></br>+{" "}
                      <i>
                        (Pushed srouce to github, bought domain name and rented
                        one VPS. Deployed on VPS and given to customers for
                        use).
                      </i>{" "}
                      <br />
                      Link:{" "}
                      <a href="https://bachhoahanhan.com" className="link">
                        https://bachhoahanhan.com
                      </a>{" "}
                      <br />
                    </h4>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="skills">
                <div className="text">
                  <div className="textFlex">
                    <h4>
                      <b>3/ Web application use for coffee shop</b>
                      <br />
                      <b>Admin interface:</b> <br />
                      + Create category, menu, tables, employees.
                      <br />+ Create order{" "}
                      <i>(add, edit, delete, change table...)</i>.<br></br>+
                      Payment, show payment infomation by employee, time.
                      <i>
                        <br />+ (Pushed srouce to github, deployed on VPS and
                        ready to use).
                      </i>{" "}
                      <br />
                      Link:{" "}
                      <a href="https://coffee.nodejs.edu.vn" className="link">
                        https://coffee.nodejs.edu.vn
                      </a>{" "}
                      <br />
                    </h4>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </main>
        <main>
          <div className="title">
            <h2>
              <i className="fa-solid fa-face-smile"></i> My Expectation
            </h2>
          </div>
          <div className="info">
            <p>
              I'm looking for a job opportunity with your company to enhance and
              improve my skills further. Thank you very much for checking out my
              CV. I hope to receive your results as soon as possible.
            </p>
          </div>
        </main>
        <footer>
          <span>truongbuunhut's cv - {year}</span>
        </footer>
      </div>
      <div
        className="backToTop"
        style={{ display: showBackToTop ? "block" : "none" }}
        onClick={handleBackToTop}
      >
        <button>
          <i className="fa-solid fa-angles-up"></i>
        </button>
      </div>
      <div className="zaloChat" onClick={openZaloChat}>
        <button>Zalo</button>
      </div>
    </div>
  );
};

export default Cv;
