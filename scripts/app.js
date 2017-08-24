$(function () {
    const options = {
        rankBy: google.maps.places.RankBy.DISTANCE,
        types: ['geocode', 'establishment'],
        componentRestrictions: {country: 'PK'}
    };
    const autocomplete = new google.maps.places.Autocomplete($('#google_places_ac')[0], options);
    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        console.log('autocomplete place_changed');
        const location = autocomplete.getPlace();
        if (location && location.geometry) {
            console.log({
                'lat': location.geometry.location.lat(),
                'lng': location.geometry.location.lng()
            });
        }
    });
});