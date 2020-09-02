import React from "react";

const GetDate = () => {
  const date = new Date().toLocaleDateString();
  return <div>today: {date}</div>;
};

export default GetDate;
