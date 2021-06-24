import React from "react";
import Title from "../Title/Title";
import "./Content.scss";

// Content Componet that take the topic and title to make an awesome topic
const Content = ({ topic, title,subTitle }) => {
  return (
    <div className="content-field "  >
    <Title title={title} />
    <h6 className="content-field__title">{subTitle}</h6>
    <p className="container content-field__paragraph mt-5" data-aos="zoom-in-right" data-aos-duration="2000">{topic}</p>
    </div>
  );
};
export default Content;
