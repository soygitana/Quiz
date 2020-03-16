import logo from "../assets/logo.svg";
import SVG from "react-inlinesvg";
import React from "react";

const Header = () => (
  <header className="app-header">
    <SVG src={logo} className="app-logo" alt="logo" />
  </header>
);

export default Header;
