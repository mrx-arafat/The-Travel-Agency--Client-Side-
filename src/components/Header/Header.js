import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  return (
    <div>
      <h2>hello from header</h2>

      <Link to="/home">Home</Link>
    </div>
  );
};

export default Header;
