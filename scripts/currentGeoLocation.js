$(function () {

    var currentGeoLocationText = $("#currentGeoLocationText");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            currentGeoLocationText.text("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        currentGeoLocationText.text("Latitude: " + lat + " Longitude: " + lon);
        latlon = new google.maps.LatLng(lat, lon);

        var currentGeoLocationOptions = {
            center:latlon,
            zoom:14,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
        };

        var map = new google.maps.Map(document.getElementById("currentGeoLocationMapHolder"), currentGeoLocationOptions);
        var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                currentGeoLocationText.text("User denied the request for Geolocation.");
                break;
            case error.POSITION_UNAVAILABLE:
                currentGeoLocationText.text("Location information is unavailable.");
                break;
            case error.TIMEOUT:
                currentGeoLocationText.text("The request to get user location timed out.");
                break;
            case error.UNKNOWN_ERROR:
                currentGeoLocationText.text("An unknown error occurred.");
                break;
        }
    }

    $('#getCurrentLocation').on('click',function () {
        getLocation();
    });
});