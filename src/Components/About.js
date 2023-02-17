import React from 'react'
import AboutBackground from '../Assets/about-background.png'
import AboutBackgroundImage from '../Assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Acerca de</p>
        <h1 className="primary-heading">
        La seguridad y el confort son importantes a la hora de conducir
        </h1>
        <p className="primary-text">
        Mas que alquilarte un carro, nosotros cuidamos de tu camino, 
        consulta nuestros tips y viaja sin preocupaciones para tu próximo destino.
        </p>
        <p className="primary-text">
        Alquilar un carro en Medellín puede ser una excelente opción para conocer la ciudad y sus alrededores. 
        con David Autos tienes a tu aliado para conocer toda Colombia.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Mas información</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Ver Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;