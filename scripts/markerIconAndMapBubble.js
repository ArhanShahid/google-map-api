$(function () {

    function initializeMarkerIconAndMapBubble() {
        console.log('initializeMarkerIconAndMapBubble')
        var addressMap;
        var myOptions = {
            center: new google.maps.LatLng(51.508742, -0.120850),
            zoom: 14,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        addressMap = new google.maps.Map(document.getElementById("markerIconAndMapBubbleMapHolder"), myOptions);
    }

    google.maps.event.addDomListener(window, 'load', initializeMarkerIconAndMapBubble);

});