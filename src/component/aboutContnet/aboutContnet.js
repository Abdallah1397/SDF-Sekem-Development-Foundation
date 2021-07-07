import React from "react";
import "./aboutContent.scss";

// Content Componet that take the topic and title to make an awesome topic
const AboutContent = ({topic,topic1,topic2,topic3, title }) => {
  return (
    <div className="aboutContent" data-aos="zoom-in-right" data-aos-duration="2000"  >
    <h2 className="aboutContent__title">{title}</h2>
    <p className="aboutContent__paragraph mt-5">{topic}</p>
    <p className="aboutContent__paragraph mt-5">{topic1}</p>
    <p className="aboutContent__paragraph mt-5">{topic2}</p>
    <p className="aboutContent__paragraph mt-5">{topic3}</p>


    </div>
  );
};
export default AboutContent;