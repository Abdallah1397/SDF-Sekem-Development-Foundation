import "./objectDetails.scss";
const ObjectDetails = ({ image, title, link }) => {
  // ObjectDetails to any display as image and title
  return (
    <div className="objectDetail">
      <a href={link}>
        <div>
          <img className="objectDetail__image" src={image} height="400px" />
          <div className="objectDetail__fakeDiv" id="title">
            {title}
          </div>
        </div>
      </a>
    </div>
  );
};
export default ObjectDetails;
