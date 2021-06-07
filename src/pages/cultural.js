import AnimatedCounter from "../component/AnimatedCounter/animatedCounter";
import Content from "../component/Content/Content";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import axios from "axios";
import { useEffect } from "react";
import ObjectDetails from "../component/objectDetails/objectDetails";
import Random from "../assets/images/variousImage/random.png";
const Cultural = () => {
  return (
    <div>
      <SliderBanner />
      <Content
        mainTitle="Cultural Empowerment"
        topic="It is a long established fact that a reader will be distracted 
        by the readable content of a page when looking at its layout.
        The point of using Lorem Ipsum is that it has a more-or-less
        normal distribution of letters, as opposed to using 'Content here,
        content here', making it look like readable English.
        Many desktop publishing packages and web page editors now
        use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy Various versions have evolved over the years, sometimes accident."
      />
      <ObjectDetails image={Random} title="Health" />
      <ObjectDetails image={Random} title="Women Empowerment Program" />
      <ObjectDetails image={Random} title="Basic Services" />
      <ObjectDetails image={Random} title="Supporting Marginalized Children" />

      <AnimatedCounter
        counter1={200}
        fact1="Investments"
        counter2={200}
        fact2="Projects"
        counter3={200}
        fact3="Beneficiaries"
        fact4="Governorates"
        counter4={200}
      />
    </div>
  );
};
export default Cultural;
