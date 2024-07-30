import React, { useEffect, useState } from "react";

const Menu = ({ dark, setDark }) => {
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

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    setDark(theme);
  }, []);

  const handleDarkTheme = () => {
    localStorage.setItem("theme", !dark);
    setDark(!dark);
  };

  return (
    <div>
      <div className="menu">
        <div className="icon">
          <i
            className="fa-solid fa-bars"
            onClick={() => setMegaMenu(!megaMenu)}
          ></i>
        </div>
        <div className="circle"></div>
        <button type="button" onClick={handleDarkTheme}>
          <i className={dark ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
        </button>

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
      <div
        className="megaMenu"
        style={{ transform: megaMenu ? "translateY(0)" : null }}
      >
        <div className="megaIcon" onClick={() => setMegaMenu(!megaMenu)}>
          <i
            className={
              megaMenu
                ? "fa-solid fa-xmark close opacity"
                : "fa-solid fa-xmark close"
            }
          ></i>
        </div>
        <ul className={megaMenu ? "opacity" : null}>
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
    </div>
  );
};

export default Menu;