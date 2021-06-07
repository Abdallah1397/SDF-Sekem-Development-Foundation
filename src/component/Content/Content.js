import React from "react";
import Title from "../Title/Title";
import "./Content.scss";

// Content Componet that take the topic and title to make an awesome topic
const Content = ({ mainTitle,topic, title }) => {
  return (
    <div className="content-field "  >
    <Title title={mainTitle} />
    <h2 className="content-field__title">{title}</h2>
    <p className="container content-field__paragraph mt-5" data-aos="flip-left"  data-aos-duration="2000">{topic}</p>
    </div>
  );
};
export default Content;
