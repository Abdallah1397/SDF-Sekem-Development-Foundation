import "./publications.scss";
import SDF from "../../assets/images/social/IMG_6655.PNG";
const Publications = ({img,title,link}) => {
  return (
    <div className="publications">
      <div>
        <img src={img} width="100%" />
        <h4>{title}</h4>
      </div>
      <div className="Download">
        <a 
        href='https://indd.adobe.com/view/e2fade96-0725-4668-8ac9-de61eada6200'
        target='_blank'>
        Preview</a>
      </div>
    </div>
  );
};
export default Publications;
