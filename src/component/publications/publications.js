import "./publications.scss";
const ObjectDetails = ({ image, title, link }) => {
  // ObjectDetails to any display as image and title
  return (
    <div className="publications" data-aos="zoom-in-right" data-aos-duration="2000">
      <a href={link} target='_blank'>
        <div>
          <img className="publications__image" src={image} height="400px" />
          <div className="publications__fakeDiv" id="title">
            {title}
          </div>
        </div>
      </a>
    </div>
  );
};
export default ObjectDetails;
