import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

import { auth } from "../firebase";

const Otp = () => {
  const convertPhoneNumber = (phoneNumber) => {
    if (phoneNumber.startsWith("0")) {
      phoneNumber = phoneNumber.substring(1);
    }
    return "+84" + phoneNumber;
  };

  const [phone, setPhone] = useState("");

  const handleChangePhone = (e) => {
    const { value } = e.target;
    setPhone(value);
  };

  const handleSendOtp = () => {
    const formattedPhone = convertPhoneNumber(phone);
    console.log(formattedPhone);

    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {}
    );

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("respone" + response);
            handleSendOtp();
          },
          "expired-callback": () => {},
        }
      );
    }

    const appAppverifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, formattedPhone, appAppverifier)
      .then((confirnmationResult) => {
        window.confirnmationResult = confirnmationResult;
        console.log(confirnmationResult);
        // setShowXacNhanOtp(true);
        // SetFormDk(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="inputItem">
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={handleChangePhone}
        />
      </div>
      <button onClick={handleSendOtp}>Gửi OTP</button>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default Otp;
