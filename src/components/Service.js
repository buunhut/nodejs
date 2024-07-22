import React, { useEffect, useRef, useState } from "react";

const Service = () => {
  const [visibleService, setVisibleService] = useState(false);
  const refService = useRef(null);

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
  return (
    <div id="service" ref={refService}>
      <h1>
        <i className="fa-solid fa-screwdriver-wrench"></i> Skills
      </h1>
      <div className="content">
        <div className={visibleService ? "fontend moveLFX" : "fontend"}>
          <h2>
            <i className="fa-solid fa-desktop"></i> Font-end
          </h2>
          <ul>
            <li>UI/UX</li>
            <li>HTML5/CSS3</li>
            <li>JavaScript</li>
            <li>ReactJs</li>
            <li>Redux/@reduxjs/toolkit</li>
            <li>Axios</li>
          </ul>
          <div className="bgc">
            <i className="fa-solid fa-display"></i>
          </div>
        </div>
        <div className={visibleService ? "backend moveFX" : "fontend"}>
          <h2>
            <i className="fa-solid fa-gears"></i> Back-end
          </h2>
          <ul>
            <li>Resfull API</li>
            <li>Websocket</li>
            <li>NestJS</li>
            <li>JWT</li>
            <li>Prisma</li>
            <li>MySQL</li>
          </ul>
          <div className="bgc">
            <i className="fa-solid fa-gears"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
