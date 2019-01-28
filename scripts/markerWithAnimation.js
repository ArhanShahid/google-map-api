$(() => {
  const animatedMove = (marker, t, current, moveto) => {

    let deltalat = (moveto.lat() - current.lat()) / 100;
    let deltalng = (moveto.lng() - current.lng()) / 100;

    let delay = 10 * t;
    for (let i = 0; i < 100; i++) {
      (function (ind) {
        setTimeout(
          () => {
            let lat = marker.position.lat();
            let lng = marker.position.lng();
            lat += deltalat;
            lng += deltalng;
            let latlng = new google.maps.LatLng(lat, lng);
            marker.setPosition(latlng);
          }, delay * ind
        );
      })(i)
    }
  }

  const map = new google.maps.Map(document.getElementById('markerAnimationMapHolder'), {
    zoom: 4,
    center: new google.maps.LatLng(-37.8136, 144.9631)
  });
  const marker = new google.maps.Marker({
    map: map,
  });

  marker.setPosition(map.getCenter());

  map.addListener('click', (e) => animatedMove(marker, .5, marker.position, e.latLng));
});