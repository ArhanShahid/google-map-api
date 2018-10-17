$(function () {
    var plotMarkerMap;
    function initializePlotMarker() {
        var plotMarkerOptions = {
            center:  new google.maps.LatLng(24.8614622, 67.00993879999999),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}
        };
         plotMarkerMap = new google.maps.Map(document.getElementById("plotMarkerMapHolder"), plotMarkerOptions);
    }
    //google.maps.event.addDomListener(window, 'load', initializePlotMarker);
    initializePlotMarker();

    $('#plotMarker').on('click',function () {
        console.log(google)
        const plotMarkerLatLong = new google.maps.LatLng(
            Number($("#plotMarkerLatitude").val()),
            Number($("#plotMarkerLongitude").val()));
        var marker = new google.maps.Marker({
            position: plotMarkerLatLong,
            map: plotMarkerMap
        });
    });
});