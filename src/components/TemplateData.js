import React from "react";

const TemplateData = (props) => {
  return (
    <div>
      <div>{props.icon}</div>
      <h4>{props.title}</h4>
      <div>{props.type}</div>
      <div>{props.isLoading}</div>
      <div>{props.error}</div>
    </div>
  );
};

export default TemplateData;
