import Content from "../component/Content/Content";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";
import ClientSlider from '../component/PartnershipSlider/partnerSlider';
const Partnerships = () => {
  return (
    <div>
      <SliderBanner />
      <Content
        title="Partnerships"
        subTitle="We believe in the importance of building and expanding partnerships with development actors in the Egyptian society to work together to amplify and enhance the desired impact."
        topic="This is why we established the Foundation's Partnership Sector  as a practical application of the Foundation's philosophy in the principle of expansion and building new partnerships, not only to maximize the material return but also to enrich the intellectual and developmental level of joint programs through the exchange of experiences and development knowledge between the Foundation and its local and international partners, with the aim of designing and implementing More effective and integrated programs."
      />
       <ClientSlider title="Partners" />
  




    </div>
  );
};
export default Partnerships;
