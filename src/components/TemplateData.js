import React from "react";

const TemplateData = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>{props.type}</div>
      <div>{props.isLoading}</div>
      <div>{props.error}</div>
    </div>
  );
};

export default TemplateData;
