$(() => {

    const markerIconAndMapBubbleLatLong = new google.maps.LatLng(24.8614622, 67.00993879999999);
    
    const icon = {
        size: new google.maps.Size(50, 100),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(35, 35),
        url: 'images/map-location-pin.png'
    };
    
    const bubbleString = '<div>' +
        '<div >' +
        '<h3>Bubble Heading</h3>' +
        '</div>' +
        '<div>' +
        '<p> Bubble body content.</p>' +
        '</div>' +
        '</div>';

    const infoWindow = new google.maps.InfoWindow({
        content: bubbleString
    });
    
    const markerIconAndMapBubbleOptions = {
        center: markerIconAndMapBubbleLatLong,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };
    
    const markerIconAndMapBubbleMap = new google.maps.Map(document.getElementById("markerIconAndMapBubbleMapHolder"), markerIconAndMapBubbleOptions);
    
    const marker = new google.maps.Marker({
        position: markerIconAndMapBubbleLatLong,
        map: markerIconAndMapBubbleMap,
        icon: icon,
        title: "Map Bubble Title!"
    });
    
    marker.addListener('click', function () {
        infoWindow.open(markerIconAndMapBubbleMap, marker);
    });

});