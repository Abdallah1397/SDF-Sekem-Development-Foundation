import Content from "../component/Content/Content";
import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";
import ClientSlider from '../component/PartnershipSlider/partnerSlider';
const Partnerships = () => {
  return (
    <div>
      <SliderBanner />
      <Content
        title="Business is Impossible Without Relations"
        subTitle="Building partnerships based on mutual trust is not only important in private but also in economic life. Business is impossible without good relations to other stakeholders, may they be businesses, consumers or suppliers. SEKEM would not have been possible without long standing partnerships that have been developed over the years to the strong foundations of today. We continue striving to develop reliable and value driven partners."
        title1="SEKEM Friends Associations"
        topic="The five associations of SEKEM Friends in Europe were established mainly to support the cultural work of the SEKEM initiative. Most educational and social projects depend on financial support that comes to a big part from the annual profits of SEKEM. 10% of the profits are devoted to the SEKEM Development Foundation underneath which such projects like the Chamomile Children or the Mahad Educational Center are organized. Nonetheless, more funds are needed to keep the cultural activities of the SEKEM Development Association alive. This can happen through financial or in-kind-donations and project proposals for public funds for development aid."
        topic1="Moreover, the SEKEM Friends see their task in building a bridge between Europe and the Egyptian initiative and in promoting the vision of SEKEM. Various events are used to foster an inter-cultural and inter-religious dialog. A special focus lies on young people and exchange programs."
      />
       <ClientSlider title="When Partners Become Friends and Friends Partners" />
  




    </div>
  );
};
export default Partnerships;
