import { useEffect } from "react";
import { connect } from "react-redux";
import { getSectorsRequest } from "../../store/actions/sectors";
import "./sectors.scss";
import Title from "../Title/Title";

/*
Sector Component that display the sdf sectors
*/
const Sector = ({ sectors, getSectors }) => {
  useEffect(() => {
    getSectors();
  }, []);
  console.log(sectors, "sectorsFile");
  return (
    <div className="sector ">
      {/* Title of Page*/}
      <Title title="Our Sectors" />
      {/* make an ternary operator to check the data*/}
      {sectors ? (
        sectors.map((item) => {
          return (
            /* link to the reference of sectors*/
            <a href={item.href}>
              <div
                className="sector__image-div"
                style={{
                  backgroundImage: `url(http://10.0.30.166:8080/${item.img})`,
                }}
              >
                <div className="sector__image-headingDiv">
                  <h3 className="sector__image-heading" id="header">
                    {item.title}
                  </h3>
                </div>
              </div>
            </a>
          );
        })
      ) : (
        <h1
          style={
            ({ textAlign: "center" },
            { marginTop: "30px" },
            { fontWeight: "bolder" })
          }
        >
         Ooops !! Something Wrong
        </h1>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  sectors: state.sector.sectors.data,
});
const mapDispatchToProps = {
  getSectors: getSectorsRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sector);
