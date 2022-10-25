import React from "react";
import "./First.css";

const First = ({ imageSrc }) => {
  return (
    <div className="first">
      <img src={imageSrc} alt="Travel" className="first-image" />
      <h1 className="first-title"> Travelling on Clicks. </h1>
    </div>
  );
};
export default First;
