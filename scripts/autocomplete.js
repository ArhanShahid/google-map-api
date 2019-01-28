$(function () {
    const options = {
        rankBy: google.maps.places.RankBy.DISTANCE,
        types: ['geocode', 'establishment'],
        componentRestrictions: { country: 'PK' }
    };
    const autocomplete = new google.maps.places.Autocomplete($('#google_places_ac')[0], options);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        const location = autocomplete.getPlace();
        if (location && location.geometry) {
            $('#googlePlaceAutoCompleteText').html("Latitude: " + location.geometry.location.lat() + "\nLongitude: " + location.geometry.location.lng());
            console.log({
                'Latitude:': location.geometry.location.lat(),
                'Longitude:': location.geometry.location.lng()
            });
        }
    });
});