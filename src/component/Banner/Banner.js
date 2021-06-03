import "./Banner.scss";

// Cover Image For any Static Page
const Banner = ({ image }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="div-banner"
    ></div>
  );
};

export default Banner;



