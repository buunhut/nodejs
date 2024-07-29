import React, { useState } from "react";
import "./app.scss";
import Service from "./components/Service";
import Contact from "./components/Contact";
import OutTeam from "./components/OutTeam";
import BackToTop from "./components/BackToTop";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Otp from "./components/Otp";
import Test from "./components/Test";
import Chat from "./components/Chat";

const App = () => {
  const [dark, setDark] = useState(false);

  return (
    <div id="container" className={dark ? "dark" : null}>
      <Menu dark={dark} setDark={setDark} />
      <Home />
      <Service />
      <OutTeam />
      {/* <Otp /> */}
      {/* <Test /> */}
      <Chat />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
};

export default App;
