import React from "react";
import titleImage from "../images/bg.jpg";

const Header = () => {
  const today = new Date().toDateString();
  return (
    <header>
      <img className="header-image" src={titleImage} alt="bg-img"></img>
      <p>always keep track</p>
      <p>
        last update: <span className="header-update">{today}</span>
      </p>
    </header>
  );
};

export default Header;
