import React, { useState } from "react";
import "../app.scss";
import Menu from "../components/Menu";
import Home from "../components/Home";
import Service from "../components/Service";
import OutTeam from "../components/OutTeam";
import Chat from "../components/Chat";
import Contact from "../components/Contact";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
const HomePage = () => {
  const [dark, setDark] = useState(false);

  return (
    <div id="container" className={dark ? "dark" : null}>
      <Menu dark={dark} setDark={setDark} />
      <Home />
      <Service />
      <OutTeam />
      <Chat />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default HomePage;
