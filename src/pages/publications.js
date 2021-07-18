import SliderBanner from "../component/SliderBanner/sliderBanner";
import Title from "../component/Title/Title";
import Publication from "../component/publications/publications";
const Publications=()=>{
    return(
        <div>
        <SliderBanner />
        <Title title="Publications"/>
        <div className="DivDetail">
        <Publication />
        <Publication />
        <Publication />
        <Publication />
        <Publication />


        </div>
        </div>
    )
}
export default Publications;