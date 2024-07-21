import React from "react";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <div id="contact">
      <FormContact />
      <div className="content">
        <div className="contactItem">
          <div className="contactIcon">
            <a href="https://facebook.com/buunhut">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
          <div className="contactIcon">
            <a href="https://www.youtube.com/@zerok3706">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
          <div className="contactIcon">
            <i className="fa-brands fa-twitter"></i>
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
  );
};

export default Contact;
