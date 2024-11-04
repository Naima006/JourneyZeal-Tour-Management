import React from "react";
import { Col } from "reactstrap";
import customizationImg from "../assets/images/customization.png";
import guideImg from "../assets/images/guide.png";
import weatherImg from "../assets/images/weather.png";
import Servicecard from "./Servicecard";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Get real-time weather updates to plan your trips perfectly.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Experience memorable journeys with our knowledgeable guides.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Tailor your travel experience to fit your unique preferences.",
  },
];

const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" md="6" sm="12" className="mb-4" key={index}>
          <Servicecard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
