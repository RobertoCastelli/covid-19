import React from "react";
import GetDate from "./GetDate";
import titleImage from "../images/bg.jpg";

const Header = () => {
  return (
    <div>
      <img src={titleImage} alt="bg-img"></img>
      <GetDate />
    </div>
  );
};

export default Header;
