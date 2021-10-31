import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <h2 className="head">hello from header</h2>

      <NavLink className="link" to="/home">
        Home
      </NavLink>
      <NavLink className="link" to="/services">
        Services
      </NavLink>
      <NavLink className="link" to="/login">
        Login
      </NavLink>
      <NavLink className="link" to="/register">
        Register
      </NavLink>
    </div>
  );
};

export default Header;
