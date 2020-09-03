import React from "react";

const GetDate = () => {
  const date = new Date().toDateString();
  return <div>{date}</div>;
};

export default GetDate;
