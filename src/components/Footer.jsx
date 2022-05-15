import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      <div className="footer__container">
        <div className="footer__links">
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>About Us</h2>
              <Link to="/error404">How it works</Link>
              <Link to="/error404">Testimonials</Link>
              <Link to="/error404">Careers</Link>
              <Link to="/error404">Terms of Service</Link>
            </div>
            <div className="footer__link--items">
              <h2>About Us</h2>
              <Link to="/error404">How it works</Link>
              <Link to="/error404">Testimonials</Link>
              <Link to="/error404">Careers</Link>
              <Link to="/error404">Terms of Service</Link>
            </div>
          </div>
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>About Us</h2>
              <Link to="/error404">How it works</Link>
              <Link to="/error404">Testimonials</Link>
              <Link to="/error404">Careers</Link>
              <Link to="/error404">Terms of Service</Link>
            </div>
            <div className="footer__link--items">
              <h2>About Us</h2>
              <Link to="/error404">How it works</Link>
              <Link to="/error404">Testimonials</Link>
              <Link to="/error404">Careers</Link>
              <Link to="/error404">Terms of Service</Link>
            </div>
          </div>
        </div>
        <section className="social__media">
          <div className="social__media--wrap">
            <div className="footer__logo">
              <Link to="/inicio" id="footer__logo">
                ASTROM
              </Link>
            </div>
            <p className="website__rights">
              &copy;{new Date().getFullYear()} Derechos reservados
            </p>

            <div className="button">
              <div className="icon">
                <i className="fa fa-instagram"></i>
              </div>
              <span>Instagram</span>
            </div>

            <div className="button">
              <div className="icon">
                <i className="fa fa-facebook-f"></i>
              </div>
              <span>Facebook</span>
            </div>

            <div className="button">
              <div className="icon">
                <i className="fa fa-twitter"></i>
              </div>
              <span>Twitter</span>
            </div>

            <div className="button">
              <div className="icon">
                <i className="fa fa-linkedin"></i>
              </div>
              <span>LinkedIn</span>
            </div>

            <div className="button">
              <div className="icon">
                <i className="fa fa-youtube"></i>
              </div>
              <span>YouTube</span>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default Footer;
