import Slider from 'react-slick';
import Title from '../Title/Title';
import Img1 from '../../assets/images/clients/1105-logo-verein.jpg';
import Img2 from '../../assets/images/clients/Centar-RS.jpg';
import Img3 from '../../assets/images/clients/DEG.jpg';
import Img4 from '../../assets/images/clients/Demeter.jpg';
import Img5 from '../../assets/images/clients/Global-Compact.jpg';
import Img6 from '../../assets/images/clients/Global-Reporting-Initiative.jpg';
import Img7 from '../../assets/images/clients/GLS.jpg';
import Img8 from '../../assets/images/clients/IAP_2013.png';
import Img9 from '../../assets/images/clients/IFOAM.jpg';
import Img10 from '../../assets/images/clients/Oiko.jpg';
import Img11 from '../../assets/images/clients/Triodos.jpg';
import Img12 from '../../assets/images/clients/World-Future-Council.jpg';






import './partnerSlider.scss';

const PartnershipSlider = ({title}) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5 section-bg">
      <div className="container">
        <Title title={title} />
        <Slider {...settings}>
          <div className="client-image-container">
            <img className="client-image" width="250px" height="100px"
            src={Img1} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" width="250px" height="100px" 
            src={Img2} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" width="250px" src={Img3} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" width="250px" src={Img4} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" width="250px" src={Img5} alt="client logo" />
          </div>
          <div className="client-image-container">
            <img className="client-image" width="250px" src={Img6} alt="client logo" />
          </div>
          <div className="client-image-container">
          <img className="client-image" width="250px" src={Img7} alt="client logo" />
        </div>
        <div className="client-image-container">
          <img className="client-image" width="250px" src={Img8} alt="client logo" />
        </div>
        <div className="client-image-container">
          <img className="client-image" width="250px" src={Img9} alt="client logo" />
        </div>
        <div className="client-image-container">
          <img className="client-image" width="250px" src={Img10} alt="client logo" />
        </div>
        <div className="client-image-container">
          <img className="client-image" width="250px" src={Img11} alt="client logo" />
        </div>
        <div className="client-image-container">
          <img className="client-image" width="250px" src={Img12} alt="client logo" />
        </div>
        </Slider>
      </div>
    </section>
  );
};

export default PartnershipSlider;
