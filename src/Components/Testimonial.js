import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonio</p>
        <h1 className="primary-heading">¿Que Están diciendo?</h1>
        <p className="primary-text">
          Conocemos la necesidad de cada a uno de nuestros clientes a su medida y es por eso
          que nos escojen siempre.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Tengo la tranquilidad de tener a los mejores aliados y especialistas en vehiculos
          del alta gama, donde me brindan los mejores vehiculos con un alto grado de servicio.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>G.DIAZ</h2>
      </div>
    </div>
  );
};

export default Testimonial;