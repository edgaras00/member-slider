import React from "react";
import "../styles/content.css";

const Content = (props) => {
  // Component that renders the person's information
  return (
    <div className="content-container">
      <div className="image-container">
        <img src={props.image} alt="person" />
      </div>
      <div className="shadow"></div>
      <br />
      <h3 className="header-one">{props.headerOne}</h3>
      <h4 className="header-two">{props.headerTwo}</h4>
      <br />
      <p>{props.children}</p>
    </div>
  );
};

export default Content;
