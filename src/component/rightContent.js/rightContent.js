import "./rightContent.scss";
const RightContent = ({ title,topic,topic1}) => {
  return (
    <div className="rightContent" data-aos="zoom-in-right" data-aos-duration="2000">
    <h4 className="rightContent__title">{title}</h4>
      <p className="rightContent__p">
        {topic}
      </p>
      <p className="rightContent__p">
      {topic1}
    </p>
    </div>
  );
};
export default RightContent;
