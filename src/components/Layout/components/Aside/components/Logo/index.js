import React from "react";
import LogoFucsia from "../../../../../../assets/img/logo-fucsia.png";

const Logo = () => {
  return (
    <a href="/" className="logo d-flex justify-content-center mb-4">
      <img src={LogoFucsia} alt="ADA admin logo" height="30" />
    </a>
  );
};

export { Logo };
