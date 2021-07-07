import { connect } from "react-redux";
import { useEffect } from "react";
import {getMediaCenterRequest} from '../store/actions/mediacenter';
import AnimatedCounter from "../component/AnimatedCounter/animatedCounter";
import Content from "../component/Content/Content";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import axios from 'axios';
import MediaCenterComponent from "../component/MediaCenter/mediaCenter";
import Random from '../assets/images/variousImage/random.png';
import Title from "../component/Title/Title";
const MediaCenter = ({media,getMedia}) => {
  useEffect(()=>{
    getMedia();
  },[])
  console.log(media);
// Media Center Page
  return (
    <div>
      <SliderBanner />
    <Title title="Media Center" />
    <div className="DivDetail">
    {media
      ? media.map((item) => {
          console.log(item._id,'item');
          return (
              <MediaCenterComponent
                title={item.title}
                image={`http://10.0.30.166:8080/${item.img}`}
                href={item.href}
              />
          );
        })
      : "No Data To Show"}
      </div>


      <AnimatedCounter counter1={200} fact1="Investments" counter2={200} fact2="Projects" counter3={200} fact3="Beneficiaries" fact4="Governorates" counter4={200}/>
    </div>
  );
};
const mapStateToProps=(state)=>({
  media:state.mediaCenter.media,
});
const mapDisptachtoProps={
  getMedia:getMediaCenterRequest,
}
export default connect(mapStateToProps,mapDisptachtoProps)(MediaCenter);
