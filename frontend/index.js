// Initialize and add the map
function initMap() {
    // The icon link
    const icon = "https://cdn.icon-icons.com/icons2/2954/PNG/32/broadcast_pin_icon_185263.png"
    // The location
    const dimensions = { lat: -1.9607, lng: 30.1079 };
    // The map, centered at the dimensions
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: dimensions,
    });
    // The marker, positioned at the specified dimensions
    const marker = new google.maps.Marker({
      position: dimensions,
      map: map,
      icon: icon,
    });

    // Setting up the coverage radius
    const rad = new google.maps.Circle({
        strokeColor: "#231F20",
        strokeOpacity: 0.2,
        strokeWeight: 0.1,
        fillColor: "#231F20",
        fillOpacity: 0.35,
        map,
        center: dimensions,
        radius: 40000,
      });
  }
  
  window.initMap = initMap;