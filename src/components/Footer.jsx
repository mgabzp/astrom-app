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
              <h2>Nosotros</h2>
              <Link to="/error404">Quiénes somos</Link>
              <Link to="/error404">Testimonios</Link>
              <Link to="/error404">Carreras</Link>
            </div>
            <div className="footer__link--items">
              <h2>Recursos</h2>
              <Link to="/error404">Publicaciones</Link>
              <Link to="/error404">Webinars</Link>
              <Link to="/error404">Políticas y prácticas</Link>
            </div>
          </div>
          <div className="footer__link--wrapper">
            <div className="footer__link--items">
              <h2>Carreras</h2>
              <Link to="/error404">Oportunidades</Link>
              <Link to="/error404">Experiencia Astrom</Link>
              <Link to="/error404">Diversidad</Link>
            </div>
            <div className="footer__link--items">
              <h2>Contáctanos</h2>
              <Link to="/error404">Escríbenos</Link>
              <Link to="/error404">hi@astrom.com</Link>
              <Link to="/error404">+1 877 215 5230</Link>
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
            </div>
            </section>

            <div className="social__media--wrap">
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
          </div>
    </>
  );
};

export default Footer;
