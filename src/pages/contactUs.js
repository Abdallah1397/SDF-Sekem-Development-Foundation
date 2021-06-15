import initMap from "../utils/map";
import { useEffect } from "react";
const ContactUs = () => {
  useEffect(() => {
    if(initMap){
      initMap();
      console.log(initMap,"initmap")
    }else{
      initMap();

    }
  }, []);
  return (
    <div className="map-div">
      <div id="map"></div>
      <div className="map-div__contactUs" id="contact_details">
        <div className="map-div__card">
          <div className="map-div__card-header">Contact Us</div>
          <div className="card-body">
            <h2>Sekem Development Foundation</h2>
            <table>
              <tr>
                <td>
                  {" "}
                  <i className="fa fa-address-card"></i>
                  13 Cairo - Belbeis Desert Rd, El-Nahda, El Salam, Cairo
                  Governorate, Egypt
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <i className="fa fa-phone-squared">&#xf098;</i>
                  Telephone: &#x2B;20 2 265 88 124
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <i className="fa fa-icon-fax">&#xf1ac;</i>
                  Fax: &#x2B;20 2 265 88 124
                </td>
              </tr>
              <tr>
                <td>
                  <i className="fa fa-mail-alt">&#xf0e0;</i>
                  Email: <a href="mailto:"></a>
                </td>
              </tr>
            </table>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default ContactUs;
