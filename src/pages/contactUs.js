import initMap from '../utils/map';
import {useEffect} from 'react';
const ContactUs=()=>{
    useEffect(()=>{
        initMap();
    },[])
    return(
        <div id="map" className="map-div">
        <div className="map-div__contact-details">
        asdd
        </div>
        </div>
    )
}
export default ContactUs;