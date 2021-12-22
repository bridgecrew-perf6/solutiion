import React from "react";
import whiteLogo from "./assets/images/Logo in White 1 (Traced).png";
import { TiSocialFacebook } from "react-icons/ti";
import { ImTwitter } from "react-icons/im";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <section className="footer">
      <div className="logo">
        <img src={whiteLogo} alt="solution white logo" />
      </div>
      <div className="social-media">
        <span>
          <TiSocialFacebook />
        </span>
        <span>
          <ImTwitter />
        </span>
        <span>
          <FiInstagram />
        </span>
        <span>
          <FaLinkedinIn />
        </span>
      </div>
      <div className="about-us">
        <div className="links">
          <div>
            <ul>
              <li>Company</li>
              <li>
                <a href="#mission">Our mission</a>
              </li>
              <li>
                <a href="#who-we-help">Who we help</a>
              </li>
              <li>
                <a href="#we-support">We support</a>
              </li>
              <li>
                <a href="#get-involved">Get involved</a>
              </li>
              <li>
                <a href="#how-does-it-work">How does it work</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Support</li>
              <li>
                <a href="#fund-us">Fund us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#subscribe">Subscribe</a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Policies</li>

              <li>
                <a href="#privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms-of-use">Terms of use</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <div>
          <ul>
            <li>Support</li>
            <li>
              <a>Fund us</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>Subscribe</a>
            </li>
          </ul>
        </div> */}
      </div>
      <div className="copyright">
        <span> &copy;</span> Copyright 2021 <span>&nbsp;</span> Solution
        Network, LLC.
      </div>
    </section>
  );
};

export default Footer;
