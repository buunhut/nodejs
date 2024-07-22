import React, { useEffect, useRef, useState } from "react";

const Team = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  const { name, gitHub, faceBook, email, phone, img, position } = item;

  useEffect(() => {
    //lăn chuột
    const handleScroll = () => {
      const targetPosition = ref.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight - 500; // Điều kiện có thể thay đổi tại đây

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
    <div className={visible ? "team scaleX" : "team"} ref={ref}>
      <img src={`/img/${img}`} />
      <h3>{name}</h3>
      <p>{position}</p>
      <div className="button">
        <a href={faceBook}>
          <i className="fa-brands fa-facebook-f"></i>
        </a>
        <a href={gitHub}>
          <i className="fa-brands fa-github"></i>
        </a>
        <a href={`mailto:${email}`}>
          <i className="fa-solid fa-envelope"></i>
        </a>
        <a href={`tel:${phone}`}>
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>
    </div>
  );
};

export default Team;
