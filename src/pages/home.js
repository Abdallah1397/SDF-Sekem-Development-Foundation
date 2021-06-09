import React from "react";
import Banner from "../component/Banner/Banner";
import Sector from "../component/Sectors/sectors";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import AnimatedCounter from "../component/AnimatedCounter/animatedCounter";
import ClientSlider from "../component/PartnershipSlider/partnerSlider";

const Home = () => {
  return (
    <div>
      <SliderBanner />
      <Sector />
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
      <ClientSlider />
    </div>
  );
};
export default Home;
