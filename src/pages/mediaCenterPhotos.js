import { useEffect } from "react";
import { connect } from "react-redux";
import { getSectorsRequest } from "../store/actions/sectors";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";
import ObjectDetails from "../component/objectDetails/objectDetails";
const MediaCenterPhotos = ({ sectors, getSectors }) => {
  useEffect(() => {
    getSectors();
  }, []);
  return (
    <div>
      <SliderBanner />
      <Title title="Photos" />
      <div className="DivDetail">
        {/* make an ternary operator to check the data*/}
        {sectors ? (
          sectors.map((item) => {
            return (
              /* link to the reference of sectors*/
              <a
                href={`/sector/${item._id}`}
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <div
                  id={item._id}
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
    </div>
  );
};
const mapStateToProps = (state) => ({
  sectors: state.sector.sectors.data,
});
const mapDispatchToProps = {
  getSectors: getSectorsRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(MediaCenterPhotos);
