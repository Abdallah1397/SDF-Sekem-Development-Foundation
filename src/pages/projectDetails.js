import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import {getprojectDetailsRequest} from '../store/actions/projectDetails';
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";

const ProjectDetails=({projectDetails,getprojectDetails})=>{
    const params=useParams();
    useEffect(()=>{
        if(params.id){
            getprojectDetails(params.id);
        }
    },[params.id])
    console.log(projectDetails);
    return(
        <div>
        <SliderBanner />
        <Title title={ projectDetails.title } />
        <div className="detailForPrograms" data-aos="zoom-in-right" data-aos-duration="2000">
        <div className="detailForPrograms__image-date">
          <img className="detailForPrograms__image"
            src={
                `http://10.0.30.166:8080/${projectDetails.img}`
            }
          />
        </div>
        <div className="detailForPrograms__detail">
          <p>{projectDetails.description }</p>
        
        </div>
      </div>


        </div>
    )
}
const mapStateToProps=(state)=>({
    projectDetails:state.projectDetails.projectDetails,
})
const mapDispatchToProps={
    getprojectDetails:getprojectDetailsRequest,
}
export default connect(mapStateToProps,mapDispatchToProps)(ProjectDetails);
