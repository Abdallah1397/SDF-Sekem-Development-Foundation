// Initialize and add the map
export default async function initMap() {

  const google = window.google;

  // The location of Uluru
  const myLatLang = { lat:30.153462240231498, lng: 31.432312465685104 };
  // The map, centered at Uluru
  const map = await new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: myLatLang,
  });
  var pinIcon = await new google.maps.MarkerImage(
		"https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
        null, /* size is determined at runtime */
        null, /* origin is 0,0 */
        null, /* anchor is bottom center of the scaled image */
        new google.maps.Size(21, 34)
      );
  var latlng= await new google.maps.LatLng(30.153462240231498, 31.432312465685104 );

  // The marker, positioned at Uluru
  const marker =await new google.maps.Marker({
    position: latlng,
    map: map,
    title: "Sekem Development Foundation"

  });
  marker.setIcon(pinIcon); 
  var panel = document.getElementById('contact_details');
  map.controls[google.maps.ControlPosition.LEFT_CENTER].push(panel);

}



