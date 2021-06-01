import "./sliderBanner.scss";
import {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import About from "../../assets/images/variousImage/aboutBanner .png";

const SliderBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
    <div class="carousel slide" data-ride="carousel" id="carousel-example-generic">
    <ol class="carousel-indicators">
        <li data-target="carousel-example-generic" data-slide-to={1} class="active"></li>
        <li data-target="carousel-example-generic" data-slide-to={0}></li>
    </ol>

    <div class="carousel-inner">
        <div class="item active">
            <img src="img1.jpg" style={{width:"360px"}}/>
        </div>
        <div class="item">
           <img src={About} class="img-responsive" />
        </div>
    </div>

    <a class="carousel-control left" href="carousel-example-generic" data-slide="prev">
        <span class="icon-prev"></span>
    </a>
    <a class="carousel-control right" href="carousel-example-generic" data-slide="next">
        <span class="icon-next"></span>
    </a>
</div>
  );
};
export default SliderBanner;
