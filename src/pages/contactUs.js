import { useGoogleMaps } from "react-hook-google-maps";

const ContactUs = () => {

//  location of sdf
  const uluru={ lat:30.153462240231498, lng: 31.432312465685104};
  const {ref,map,google}=useGoogleMaps(
    // Api from google developer
    "AIzaSyCjfnlM47jwc23BG7ZldF4qcSVLRitN_SE",
    {
      center:{ lat:30.153462240231498, lng: 31.432312465685104},
      zoom:16,
    },
  );
  // to put marker of sdf
  if (map){
    new google.maps.Marker({ position: uluru, map,title:"Sekeme Development Foundation SDF" });
    const panel = document.getElementById('contact_details');
    // put it in center
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(panel);

  }
  return (
    <div className="map-div">
      <div ref={ref} style={{width: "100%", height: "70vh" }}></div>
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
