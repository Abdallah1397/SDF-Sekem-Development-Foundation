import AnimatedCounter from "../component/AnimatedCounter/animatedCounter";
import Content from "../component/Content/Content";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import axios from 'axios';
import {useEffect} from 'react';
import ObjectDetails from "../component/objectDetails/objectDetails";
import Random from '../assets/images/variousImage/random.png';
import Title from "../component/Title/Title";
const MediaCenter = () => {
  
// Media Center Page
  return (
    <div>
      <SliderBanner />
    <Title title="Media Center" />
      <ObjectDetails image={Random} title="Micro-Enterprise Program"/>
      <ObjectDetails image={Random} title="Agricultural Development Program"/>
      <ObjectDetails image={Random} title="Training & Employment Program "/>


      <AnimatedCounter counter1={200} fact1="Investments" counter2={200} fact2="Projects" counter3={200} fact3="Beneficiaries" fact4="Governorates" counter4={200}/>
    </div>
  );
};
export default MediaCenter;
