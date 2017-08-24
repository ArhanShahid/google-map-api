$(function () {

    var currentGeoLocationText = document.getElementById("currentGeoLocationText");



    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            currentGeoLocationText.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        currentGeoLocationText.innerHTML = "Latitude: " + lat +
            "<br>Longitude: " + lon;
        latlon = new google.maps.LatLng(lat, lon);
        mapholder = document.getElementById('currentGeoLocationMapHolder');
        mapholder.style.height = '90%';
        mapholder.style.width = '100%';

        var myOptions = {
            center:latlon,zoom:14,
            mapTypeId:google.maps.MapTypeId.ROADMAP,
            mapTypeControl:false,
            navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
        };

        var map = new google.maps.Map(document.getElementById("currentGeoLocationMapHolder"), myOptions);
        var marker = new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                currentGeoLocationText.innerHTML = "User denied the request for Geolocation.";
                break;
            case error.POSITION_UNAVAILABLE:
                currentGeoLocationText.innerHTML = "Location information is unavailable.";
                break;
            case error.TIMEOUT:
                currentGeoLocationText.innerHTML = "The request to get user location timed out.";
                break;
            case error.UNKNOWN_ERROR:
                currentGeoLocationText.innerHTML = "An unknown error occurred.";
                break;
        }
    }

    $('#getCurrentLocation').on('click',function () {
        getLocation();
    });
});