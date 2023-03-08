import React, { useEffect, useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [showBlack, setShowBlack] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 120) {
        setShowBlack(true);
      } else setShowBlack(false);
    });

    return () => {
      window.removeEventListener("scroll", setShowBlack(showBlack));
    };
  }, []);

  return (
    <div className={`nav ${showBlack && "nav__black"}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png"
        alt="Netflix"
      />
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="User"
      />
    </div>
  );
};

export default Nav;
