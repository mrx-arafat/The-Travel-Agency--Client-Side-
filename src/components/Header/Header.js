import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

import logo from "../../img/logo.png";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <Navbar
        sticky="top"
        bg="dark"
        variant="dark"
        collapseOnSelect
        expand="lg"
        className="p-4"
      >
        <Container>
          <Navbar.Brand className="text-danger fw-bold" href="#home">
            <img className="logo" src={logo} alt="" srcset="" />
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              <Nav.Link as={HashLink} to="/home">
                Home
              </Nav.Link>
              <Nav.Link as={HashLink} to="/home#services">
                Services
              </Nav.Link>
              <Nav.Link as={HashLink} to="/order">
                Order
              </Nav.Link>
              <Nav.Link as={HashLink} to="/manageallorder">
                Manage All Order
              </Nav.Link>
              <Nav.Link as={HashLink} to="/contact">
                Contact
              </Nav.Link>
              {user?.email ? (
                <Button onClick={logOut} variant="light">
                  Log Out{" "}
                </Button>
              ) : (
                <Nav.Link href="/login">Login</Nav.Link>
              )}
            </Nav>
            <Navbar.Text>
              <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
