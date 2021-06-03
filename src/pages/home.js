import React from 'react';
import Banner from '../component/Banner/Banner';
import Sector from '../component/Sectors/sectors';
import SliderBanner from '../component/SliderBanner/sliderBanner';
import About from "../assets/images/variousImage/aboutBanner.png";
import AnimatedCounter from '../component/AnimatedCounter/animatedCounter';
import ClientSlider from '../component/PartnershipSlider/partnerSlider';

const Home=()=>{
    return(
        <div>
            <SliderBanner />
            <Sector />
            <Banner image={About}/>
            <AnimatedCounter counter1={200} fact1="Investments" counter2={200} fact2="Projects" counter3={200} fact3="Beneficiaries" fact4="Governorates" counter4={200}/>
            <ClientSlider />
            </div>
    )
}
export default Home;