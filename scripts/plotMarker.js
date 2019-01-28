$(() => {

    const plotMarkerOptions = {
        center: new google.maps.LatLng(24.8614622, 67.00993879999999),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };
    
    const plotMarkerMap = new google.maps.Map(document.getElementById("plotMarkerMapHolder"), plotMarkerOptions);

    $('#plotMarker').on('click', () => {
        const plotMarkerLatLong = new google.maps.LatLng(
            Number($("#plotMarkerLatitude").val()),
            Number($("#plotMarkerLongitude").val()));
        new google.maps.Marker({
            position: plotMarkerLatLong,
            map: plotMarkerMap
        });
    });
});