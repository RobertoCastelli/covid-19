import React from "react";
import GetDate from "./GetDate";
import titleImage from "../images/bg.jpg";

const Header = () => {
  return (
    <header>
      <img className="header-image" src={titleImage} alt="bg-img"></img>
      <GetDate />
    </header>
  );
};

export default Header;
