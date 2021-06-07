import React from "react";
import "./aboutContent.scss";

// Content Componet that take the topic and title to make an awesome topic
const AboutContent = ({topic, title }) => {
  return (
    <div className="aboutContent"  >
    <h2 className="aboutContent__title">{title}</h2>
    <p className="aboutContent__paragraph mt-5">{topic}</p>
    </div>
  );
};
export default AboutContent;