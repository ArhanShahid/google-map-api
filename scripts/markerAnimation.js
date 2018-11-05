function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: new google.maps.LatLng(-37.8136, 144.9631)
  });
  marker = new google.maps.Marker({
    map: map,
  });

  marker.setPosition(map.getCenter());

  map.addListener('click', function(e) {
    animatedMove(marker, .5, marker.position, e.latLng);
  });
}
google.maps.event.addDomListener(window, 'load', initMap);

// move marker from position current to moveto in t seconds
function animatedMove(marker, t, current, moveto) {
  var lat = current.lat();
  var lng = current.lng();

  var deltalat = (moveto.lat() - current.lat()) / 100;
  var deltalng = (moveto.lng() - current.lng()) / 100;

  var delay = 10 * t;
  for (var i = 0; i < 100; i++) {
    (function(ind) {
      setTimeout(
        function() {
          var lat = marker.position.lat();
          var lng = marker.position.lng();
          lat += deltalat;
          lng += deltalng;
          latlng = new google.maps.LatLng(lat, lng);
          marker.setPosition(latlng);
        }, delay * ind
      );
    })(i)
  }
}
