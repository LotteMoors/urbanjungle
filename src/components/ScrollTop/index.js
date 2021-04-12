import React, { useState, useEffect } from "react";
import { Icon } from  'react-materialize'
import "./style.scss";

export const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 350) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 350) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (    
    <button
      className="arrow-up"
      onClick={scrollTop}
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <span className="arrow-slide"></span>
      <Icon>keyboard_arrow_up</Icon>
      
    </button>
  );
};

export default ScrollTop;
