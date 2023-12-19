import React from "react";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="logo">
      <img className="img" alt="watcher image " src="./src/assets/logo.jpg" />
      <div className="logo_title">The Watcher</div>
    </div>
  );
};

export default Logo;
