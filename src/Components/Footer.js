import React from "react";
import Logo from "../Assets/Logo2.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Calidad</span>
          <span>Ayuda</span>
          <span>Comparte</span>
          <span>Trabaja Con Notros</span>
          <span>Testimonios</span>
          <span>Hacer</span>
        </div>
        <div className="footer-section-columns">
          <span>350-780-27-58</span>
          <span>comercial@autos.com</span>
          <span>quejas@autos.com</span>
          <span>contacto@autos.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terminos & Condiciones</span>
          <span>Derechos Reservados</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;