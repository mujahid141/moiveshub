import React from "react";
import "./Header.css";
import logo1 from "../../images/logo 1.jpg";
import logo2 from "../../images/logo 2.png";

const Header = () => {
  return (
    <div
      className="header"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      <img className="logo1" src={logo1} alt="logo1" />
      <h1>Moives Hub</h1>
      <img className="logo2" src={logo2} alt="logo2" />
    </div>
  );
};

export default Header;
