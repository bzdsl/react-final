/** @format */

import React, { useEffect, useState } from "react";

import "./BackToTop.css";
import { AiOutlineArrowUp } from "react-icons/ai";
function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {backToTopButton && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "2%",
            height: "40px",
            width: "40px",
            background: "#ff64ae",
            border: "none",
            borderRadius: "20%",
            color: "#ffffff",
            fontSize: "30px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={scrollUp}>
          <AiOutlineArrowUp />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
