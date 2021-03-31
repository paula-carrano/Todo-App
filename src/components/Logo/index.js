import React from "react";
import logo from "../../assets/img/logo.png";

const Logo = () => {
  return (
    <a href="/" className="logo d-flex justify-content-center mb-4">
      <img src={logo} alt="ADA admin logo" height="100" />
    </a>
  );
};

export { Logo };
