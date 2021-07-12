
import SliderBanner from '../component/SliderBanner/sliderBanner';
import Title from '../component/Title/Title';
import Content from '../component/Content/Content';
import DonateComponent from '../component/donate/donate';
import donateSchool from "../assets/images/donate/Button-02.png";
import donatehealth from "../assets/images/donate/Button-03.png";

const Donate=()=>{
    return(
        <div>
        <SliderBanner />
        <Content title="Support SEKEM" topic="SEKEM strives to contribute to holistic, sustainable development since 1977 in the four dimensions of sustainable development: Ecology, Economy, Societal- and Cultural Life. And since the very beginning, SEKEM has a great network of supporters and like-minded people, helping SEKEM to achieve its goals. Ever since, there is a great community of people, carrying the vision of SEKEM in their hearts and supporting SEKEM in its various fields."/>
        <DonateComponent href="/donateHealth" title="Donate for Health" topic="Education is the foundation of wholistic human development and progress of everything. It is a continuous challenge. Learning throughout life enables people to improve their living conditions and contribute to the development of their community and country. Help us with your donation to provide education to as many children as possible, giving them a perspective for their future." img={donatehealth} />
        <DonateComponent title="Support the SEKEM School" topic="Health is more than the absence of illness. SEKEM wants to develop a concept for integrative health that understands human well-being in its entirety and promotes it preventively. With this, SEKEM wants to contribute to a sustainable improvement of the desolate health system and the high incidence of diseases in Egypt." img={donateSchool} />
        <DonateComponent title="Donate for Education" topic="Together, we can offer children and adults in Egypt a holistic education that allows them to develop their potential. Only by investing in people and life long learning a country can develop sustainably. Join us and make a difference. Every donation counts!" />
        <DonateComponent />



        </div>
    )
}
export default Donate;