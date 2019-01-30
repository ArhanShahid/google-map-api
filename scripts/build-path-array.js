$(() => {

    const latLong = [];
    let print = [];

    const map = new google.maps.Map(document.getElementById('path-array-map'), {
        center: new google.maps.LatLng(24.8614622, 67.00993879999999),
        zoom: 11,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    google.maps.event.addListener(map, 'click', (event) => {
        latLong.push(new google.maps.LatLng(event.latLng.lat(), event.latLng.lng()));
        latLong.map(v => new google.maps.Marker({
            position: v,
            map: map
        }));
        
        const flightPath = new google.maps.Polyline({
            path: latLong,
            strokeColor: '#FF0000',
            strokeOpacity: 0.5,
            strokeWeight: 2
        });

        flightPath.setMap(map);
        print = [];
        print = latLong.map(v => JSON.stringify({
            'lat': v.lat(),
            'lng': v.lng()
        }));
        console.log(print);
        $('code').html(`[</br>${print}</br>]`);
    })


});