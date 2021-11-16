import React from "react";
import { Link, NavLink } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <Link to="/">
            <FacebookIcon />
          </Link>
          <Link to="/">
            <TwitterIcon />
          </Link>
          <Link to="/">
            <LinkedInIcon />
          </Link>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item">
            <Link to="/">Home</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/services">Services</Link>
          </li>

          <li className="list-inline-item">
            <Link to="/">Terms</Link>
          </li>
          <li className="list-inline-item">
            <Link to="/">Privacy Policy</Link>
          </li>
        </ul>
        <p className="copyright">Copyright © 2021 || Easin Arafat</p>
      </footer>
    </div>
  );
};

export default Footer;
