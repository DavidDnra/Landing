import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Ahorro en Tramites",
      text: "Te ahorramos los tramites haciendo la manera mas facil y comodo de rentar un vehiculo.",
    },
    {
      image: ChooseMeals,
      title: "Escoje el mejor vehiculo",
      text: "Tenemos las mejores opciones en vehiculos alta gama con los modelos mas recientes en distintas marcas. ",
    },
    {
      image: DeliveryMeals,
      title: "Rapido y seguro",
      text: "Ofrecemos distintos medios de pago seguro y rapido.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Trabajamos</p>
        <h1 className="primary-heading">Como Lo Hacemos</h1>
        <p className="primary-text">
          Somos especialistas en vehiculos de alta gama, tenemos las mejores opciones
          para separar tu vehiculo facil y rapido.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;