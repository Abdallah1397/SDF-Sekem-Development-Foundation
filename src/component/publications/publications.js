import "./publications.scss";
import SDF from "../../assets/images/social/IMG_6655.PNG";
const Publications = () => {
  return (
    <div className="publications">
      <div>
        <img src={SDF} width="100%" />
        <h4>The Annual Report 2019</h4>
      </div>
      <div className="Download">
        <a>Download</a>
      </div>
    </div>
  );
};
export default Publications;
