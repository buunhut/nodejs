import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Team = ({ item, index }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const { id, name, gitHub, faceBook, email, phone, img, position } = item;

  const check = index / 2;

  useEffect(() => {
    //lăn chuột
    const handleScroll = () => {
      const targetPosition = ref.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight - 300; // Điều kiện có thể thay đổi tại đây

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

  const navigate = useNavigate();

  const handleCv = (id) => {
    if (id === 2) {
      navigate("/buunhut");
    }
  };
  return (
    <div
      className={
        visible
          ? check === 0 || check === 1
            ? "team scaleY"
            : "team scaleY"
          : "team"
      }
      ref={ref}
    >
      <img
        src={`https://api.nodejs.edu.vn/${img}`}
        onClick={() => {
          handleCv(id);
        }}
      />
      <h3>{name}</h3>
      <p>{position}</p>
      <div className="button">
        {faceBook && (
          <a href={faceBook}>
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        )}
        {gitHub && (
          <a href={gitHub}>
            <i className="fa-brands fa-github"></i>
          </a>
        )}
        {email && (
          <a href={`mailto:${email}`}>
            <i className="fa-solid fa-envelope"></i>
          </a>
        )}
        {phone && (
          <a href={`tel:${phone}`}>
            <i className="fa-solid fa-phone"></i>
          </a>
        )}
      </div>
    </div>
  );
};

export default Team;
