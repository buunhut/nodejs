import React, { useEffect, useState } from "react";

const BackToTop = () => {
  //viêt dùm mình
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Function to check if user has scrolled down
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Add event listener when component mounts
    window.addEventListener("scroll", toggleVisibility);

    // Clean up the event listener when component unmounts
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="backToTop">
      {isVisible && (
        <button type="button" onClick={scrollToTop}>
          <i className="fa-solid fa-angles-up"></i>
        </button>
      )}
    </div>
  );
};

export default BackToTop;
