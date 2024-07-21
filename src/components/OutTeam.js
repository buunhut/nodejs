import React, { useEffect, useRef, useState } from "react";

const OutTeam = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    //lăn chuột
    const handleScroll = () => {
      const targetPosition = ref.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight - 100; // Điều kiện có thể thay đổi tại đây

      if (targetPosition < screenPosition) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="ourTeam" ref={ref}>
      <h1>
        <i className="fa-solid fa-users"></i> Our teams
      </h1>
      <div className="content">
        <div className={visible ? "team scaleX" : "team"}>
          <img src="./img/nhut.jpg" alt="hình" />
          <h3>Trương Bửu Nhựt</h3>
          <p>Web developer</p>
          <div className="button">
            <a href="https://facebook.com/buunhut">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/buunhut">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:nhut.nta@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:+84909240886">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
        <div className={visible ? "team scaleX" : "team"}>
          <img src="./img/tan.jpg" alt="hình" />
          <h3>Nguyễn Đức Tấn</h3>
          <p>Web developer</p>
          <div className="button">
            <a href="https://facebook.com/nguyen.duc.tan998">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://github.com/ductandev">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="mailto:nguyenductan998@gmail.com">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="tel:+84931238660">
              <i className="fa-solid fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
      <button type="button">
        <i className="fa-solid fa-handshake"></i> Join to us
      </button>
    </div>
  );
};

export default OutTeam;
