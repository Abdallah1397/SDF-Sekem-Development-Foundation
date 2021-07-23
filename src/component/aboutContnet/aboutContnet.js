import React from "react";
import "./aboutContent.scss";

// Content Componet that take the topic and title to make an awesome topic
const AboutContent = ({ display,topic, topic1, topic2, topic3, title, img ,list1,list2,list3,list4,list5,list6,list7,list8,list9,list10,list11,list12,list13}) => {
  return (
    <div
      className="aboutContent"
      data-aos="zoom-in-right"
      data-aos-duration="2000"
    >
      <h2 className="aboutContent__title">{title}</h2>
      <img className="aboutContent__img" width="250px" height="250px" src={img} />
      <p className="aboutContent__div">
        <p className="aboutContent__P">
          <p className="aboutContent__paragraph mt-5">{topic}</p>
          <p className="aboutContent__paragraph mt-5">{topic1}</p>
          <p className="aboutContent__paragraph mt-5">{topic2}</p>
          <p className="aboutContent__paragraph mt-5">{topic3}</p>
          <ul
            className="about-ul"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            style={{display:display}}
            
          >
            <li style={{listStyle:"none"}}> {list1}</li>
            <li style={{listStyle:"none"}}>{list2}</li>
            <li style={{listStyle:"none"}}> {list3}</li>
            <li style={{listStyle:"none"}}> {list4}</li>
            <li style={{listStyle:"none"}}> {list5}</li>
            <li style={{listStyle:"none"}}> {list6}</li>
            <li style={{listStyle:"none"}}> {list7}</li>
            <li style={{listStyle:"none"}}> {list8}</li>
            <li style={{listStyle:"none"}}> {list9}</li>
            <li style={{listStyle:"none"}}> {list10}</li>
            <li style={{listStyle:"none"}}> {list11}</li>
            <li style={{listStyle:"none"}}> {list12}</li>
            <li style={{listStyle:"none"}}> {list13}</li>
          </ul>
        </p>
      </p>
    </div>
  );
};
export default AboutContent;
