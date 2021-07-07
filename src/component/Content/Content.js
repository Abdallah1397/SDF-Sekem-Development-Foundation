import React from "react";
import Title from "../Title/Title";
import "./Content.scss";

// Content Componet that take the topic and title to make an awesome topic
const Content = ({ topic, title,title1,subTitle,topic1 }) => {
  return (
    <div className="content-field "  >
    <Title title={title} />
    <p className="content-field__title" data-aos="zoom-in-right" data-aos-duration="2000">{subTitle}</p>
    <h4 className="content-field__title1" data-aos="zoom-in-right" data-aos-duration="2000">{title1}</h4>
    <p className="container content-field__paragraph mt-5" data-aos="zoom-in-right" data-aos-duration="2000">{topic}
    </p>
    <p className="container content-field__paragraph mt-5" data-aos="zoom-in-right" data-aos-duration="2000">{topic1}
    </p>
    </div>
  );
};
export default Content;
