import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getSectorsRequest} from '../../store/actions/sectors';
import "./sectors.scss";
import Title from "../Title/Title";
import economic from "../../assets/images/economic/2M0A5572.jpg";
import social from "../../assets/images/social/DSC_0496.jpg";
import ecological from "../../assets/images/ecological/L1001263.JPG";
import cultural from "../../assets/images/cultural/culturalSchool.jpg";

/*
Sector Component that display the sdf sectors
*/
const Sector = ({sectors,getSectors}) => {
  useEffect(()=>{
    getSectors();
  },[])
  return (
    <div className="sector ">
      {/* Title of Page*/}
      <Title title="Our Sectors" />
      {/* link to the reference of sectors*/}
      <a href="/economic">
        <div
          className="sector__image-div"
          style={{ backgroundImage: `url(${economic})` }}
        >
          <div className="sector__image-headingDiv">
            <h3 className="sector__image-heading" id="header">Eeconomic Empowerment</h3>
          </div>
        </div>
      </a>

      <a href="/social">
        <div
          className="sector__image-div"
          style={{ backgroundImage: `url(${social})` }}
        >
          <div className="sector__image-headingDiv">
            <h3 className="sector__image-heading" id="header">Social Empowerment</h3>
          </div>
        </div>
      </a>

      <a href="/cultural">
        <div
          className="sector__image-div"
          style={{ backgroundImage: `url(${cultural})` }}
        >
          <div className="sector__image-headingDiv">
            <h3 className="sector__image-heading" id="header">Cultural</h3>
          </div>
        </div>
      </a>

      <a href="/ecological">
        <div
          className="sector__image-div"
          style={{ backgroundImage: `url(${ecological})` }}
        >
          <div className="sector__image-headingDiv">
            <h3 className="sector__image-heading" id="header">Ecological</h3>
          </div>
        </div>
      </a>
    </div>
  );
};
const mapStateToProps = (state) => ({
  sectors: state.sector.sectors,
});
const mapDispatchToProps = {
  getSectors: getSectorsRequest,
};
export default connect(mapStateToProps,mapDispatchToProps)(Sector);
