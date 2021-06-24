import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getNewsDetailsRequest } from "../store/actions/newsDetails";
import Title from "../component/Title/Title";
import SliderBanner from "../component/SliderBanner/sliderBanner";

const NewsDetails = ({ newsDetails, getNewsDetails }) => {
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      getNewsDetails(params.id);
    }
  }, [params.id]);
  return (
    <div>
      <SliderBanner />
      <Title title={ newsDetails.title} />
      <div className="detailForPrograms" data-aos="zoom-in-right" data-aos-duration="2000">
        <div className="detailForPrograms__image-date">
          <img className="detailForPrograms__image"
            src={
               `http://10.0.30.166:8080/${newsDetails.img}`
               
            }
          />
          <h5>{ newsDetails.date}</h5>
        </div>
        <div className="detailForPrograms__detail">
          <p>{newsDetails.details }</p>
        
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  newsDetails: state.newsDetail.detailOfNews,
});
const mapDispatchToProps = {
  getNewsDetails: getNewsDetailsRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsDetails);
