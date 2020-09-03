import React from "react";
import titleImage from "../images/bg.jpg";
import useFetch from "./useFetch";

const Header = () => {
  //--> MIT License 2020, mathdroid
  const url = `https://covid19.mathdro.id/api`;
  const { lastUpdate } = useFetch(url);

  return (
    <header>
      <img className="header-image" src={titleImage} alt="bg-img"></img>
      <p>always keep track</p>
      <p>
        last update:{" "}
        <span className="header-update">
          {new Date(lastUpdate).toDateString()}
        </span>
      </p>
    </header>
  );
};

export default Header;
