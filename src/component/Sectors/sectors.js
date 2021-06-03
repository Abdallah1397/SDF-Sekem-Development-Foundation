import "./sectors.scss";
import Title from "../Title/Title";
import About from "../../assets/images/variousImage/aboutBanner.png";
import { NavLink } from "react-router-dom";

const Sector = () => {
  return (
    <div className="sector ">
      <Title title="Our Sectors" />
      <div
        className="sector__image-div"
        style={{ backgroundImage: `url(${About})` }}
      >
        <div className="sector__image-headingDiv">
          <NavLink exact to="\ss">
            <h3 className="sector__image-heading">Eeconomic Empowerment</h3>
          </NavLink>
        </div>
      </div>

      <div
        className="sector__image-div"
        style={{ backgroundImage: `url(${About})` }}
      >
        <div className="sector__image-headingDiv">
          <NavLink exact to="\ss" className="sector__nav">
            <h3 className="sector__image-heading">Social Empowerment</h3>
          </NavLink>
        </div>
      </div>
      <div
        className="sector__image-div"
        style={{ backgroundImage: `url(${About})` }}
      >
        <div className="sector__image-headingDiv">
          <NavLink exact to="\ss">
            <h3 className="sector__image-heading">Cultural</h3>
          </NavLink>
        </div>
      </div>
      <div
        className="sector__image-div"
        style={{ backgroundImage: `url(${About})` }}
      >
        <div className="sector__image-headingDiv">
          <NavLink exact to="\ss">
            <h3 className="sector__image-heading">Ecological</h3>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Sector;
