import "./donate.scss";
const DonateComponent = ({ title,img, topic,href}) => {
  return (
    <div className="donate" data-aos="zoom-in-right" data-aos-duration="2000">
    <a href={href} className="donate__title">{title}</a>
      <p className="donate__p">
        <a href={href}>
          <img src={img} width="150px" className="donate__img" />
        </a>
        {topic}
      </p>
    </div>
  );
};
export default DonateComponent;
