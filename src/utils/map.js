// Initialize and add the map
export default function initMap() {
    const google = window.google;
    console.log(window);
    // The location of Uluru
    const uluru = { lat: 30.157506999999995, lng: 31.4341788 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }