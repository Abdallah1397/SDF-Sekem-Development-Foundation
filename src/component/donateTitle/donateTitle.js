import './donateTitle.scss';
import Donate from '../../assets/images/social/DSC_4656.jpg'
const DonateTitle=()=>{
    return(
        <div className="donateTitle">
        <h3>Donate health</h3>
        <div className="donateTitle__div">
        <img className="donateTitle__img" src={Donate} />
        <div className="donateTitle__P" >
        <p>Health is more than the absence of illness. 
        </p>
        <p>SEKEM wants to develop a concept for integrative healthcare that supports the well-being of the individual in its wholeness and promotes it through prevention. In this way SEKEM wants to contribute to a sustainable improvement of the desolate health care system and the high incidence of illness in Egypt.</p>
        </div>
        </div>
        </div>
    )
}
export default DonateTitle;