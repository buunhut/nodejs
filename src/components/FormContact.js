import React, { useEffect, useState } from "react";
import * as moment from "moment";
import axios from "axios";

const FormContact = () => {
  const [info, setInfo] = useState({
    yourName: "",
    yourEmail: "",
    textMessage: "",
  });
  const [alert, setAlert] = useState({
    yourName: "",
    yourEmail: "",
    textMessage: "",
  });

  const postData = async (data) => {
    await axios({
      method: "post",
      url: "https://api.nodejs.edu.vn/nodejs",
      data,
    })
      .then((res) => {
        if (res.data.statusCode === 200) {
          setProcess(true);
          setTimeout(() => {
            setInfo({
              yourName: "",
              yourEmail: "",
              textMessage: "",
            });
            setFinish(true);
          }, 2000);
          return res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [process, setProcess] = useState(false);

  const [finish, setFinish] = useState(false);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setInfo((prevState) => ({ ...prevState, [name]: value }));

    // Check each field in info
    if (value.trim() === "") {
      setAlert((prevState) => ({ ...prevState, [name]: "Enter please" }));
    } else {
      setAlert((prevState) => ({ ...prevState, [name]: "" })); // Clear previous alert if input is valid
    }
  };
  const handleSend = async () => {
    let isValid = true;

    // Check each field in info
    for (let key in info) {
      if (info[key].trim() === "") {
        setAlert((prevState) => ({ ...prevState, [key]: "Enter please" }));
        isValid = false;
      } else {
        setAlert((prevState) => ({ ...prevState, [key]: "" })); // Clear previous alert if input is valid
      }
    }

    if (isValid) {
      const contactTime = moment().utc().toISOString();
      //   console.log(contactTime);

      const data = {
        contactTime,
        ...info,
      };

      postData(data);
    }
  };

  useEffect(() => {
    if (finish) {
      setTimeout(() => {
        setProcess(false);
        setFinish(false);
      }, 3000);
    }
  }, [finish]);

  return (
    <>
      <div className="content">
        <form action="">
          <h2>Contact me</h2>
          <div className="inputItem">
            <input
              type="text"
              placeholder="Your name"
              value={info.yourName}
              name="yourName"
              onChange={handleChangeInput}
              onBlur={handleChangeInput}
              style={{ borderColor: alert.yourName !== "" ? "red" : "" }}
            />
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="inputItem">
            <input
              type="text"
              placeholder="Your e-mail"
              value={info.yourEmail}
              name="yourEmail"
              onChange={handleChangeInput}
              onBlur={handleChangeInput}
              style={{ borderColor: alert.yourEmail !== "" ? "red" : "" }}
            />
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="inputItem">
            <textarea
              placeholder="Text message"
              value={info.textMessage}
              name="textMessage"
              onChange={handleChangeInput}
              onBlur={handleChangeInput}
              style={{ borderColor: alert.textMessage !== "" ? "red" : "" }}
            />
          </div>
          <button type="button" onClick={handleSend}>
            <i className="fa-solid fa-paper-plane"></i> Send
          </button>
        </form>
      </div>

      {process && (
        <div
          className="overlay"
          //   onClick={() => {
          //     setProcess(false);
          //     setFinish(false);
          //   }}
        >
          {finish ? (
            <p>
              Sent, thank you for contact me. I will reply you as soon as
              possible
            </p>
          ) : (
            <p>Sending...</p>
          )}
        </div>
      )}
    </>
  );
};

export default FormContact;
