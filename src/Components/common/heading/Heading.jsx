import React from "react";

const Title = ({ subTitle, title }) => {
  return (
    <div>
      <div id="heading">
        <h3>{title}</h3>
        <h1>{subTitle}</h1>
      </div>
    </div>
  );
};

export default Title;
