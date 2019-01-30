$(() => {

    const autocomplete = new google.maps.places.Autocomplete($('#google-place-ac')[0], {
        rankBy: google.maps.places.RankBy.DISTANCE,
        types: ['geocode', 'establishment'],
        componentRestrictions: {
            country: 'PK'
        }
    });

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
        const location = autocomplete.getPlace();
        if (location && location.geometry) {
            $('#google-place-ac-text').html(`Latitude: ${location.geometry.location.lat()} Longitude: ${location.geometry.location.lng()}`);
            console.log(`Latitude: ${location.geometry.location.lat()} Longitude: ${location.geometry.location.lng()}`);
        }
    });
});