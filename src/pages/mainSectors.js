import { useParams } from "react-router";
import { useEffect } from "react";
import { connect } from "react-redux";
import { getSectorDetailsRequest } from "../store/actions/sectorDetails";
import Content from "../component/Content/Content";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import ObjectDetails from "../component/objectDetails/objectDetails";
import AnimatedCounter from "../component/AnimatedCounter/animatedCounter";

const MainSector = ({ sectorDetail, getSectorDetail }) => {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      getSectorDetail(params.id);
    }
  }, [params.id]);
  return (
    <div>
      <SliderBanner />
      <Content title={sectorDetail.title} topic={sectorDetail.breif} />
      <div className="DivDetail">
      {sectorDetail.programs
        ? sectorDetail.programs.map((item) => {
            return (
                <ObjectDetails
                  title={item.title}
                  image={`http://10.0.30.166:8080/${item.img}`}
                  href="projects-programs"
                  id={item._id}
                />
            );
          })
        : "No Data To Show"}
        </div>

      <AnimatedCounter
        counter1={527872}
        fact1="Investments"
        counter2={80}
        fact2="Projects"
        counter3={500}
        fact3="Beneficiaries"
        fact4="Governorates"
        counter4={1321}
      />
    </div>
  );
};
const mapStateToProps = (state) => ({
  sectorDetail: state.sectorDetails.sectorDetails,
});
const mapDispatchToProps = {
  getSectorDetail: getSectorDetailsRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(MainSector);
