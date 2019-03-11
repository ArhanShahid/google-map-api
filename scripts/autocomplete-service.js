$(() => {

    const sessionToken = new google.maps.places.AutocompleteSessionToken();
    const autocompleteService = new google.maps.places.AutocompleteService();

    $(document).on('keypress', '#google-place-ac-service', function () {
        let acText = $('#google-place-ac-service').val();
        if (acText.length > 2) {
            autocompleteService.getPlacePredictions({
                    input: acText,
                    sessionToken: sessionToken,
                    rankBy: google.maps.places.RankBy.DISTANCE,
                    types: ['geocode', 'establishment'],
                    componentRestrictions: {
                        country: 'PK'
                    }
                },
                function (predictions, status) {
                    if (status != google.maps.places.PlacesServiceStatus.OK) {
                        console.error(status);
                        return;
                    } else {
                        $('#google-place-ac-service-results').html('');
                        predictions.forEach(function (prediction) {
                            console.log(prediction);
                            $('#google-place-ac-service-results').append(`<li>${prediction.description}</li>`);
                        });
                    }

                });

        }
    });

    let getDetail = function (prediction) {
        const request = {
            placeId: prediction.place_id
        };
        const service = new google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails(request, function (data) {
            console.log('Get Details');
            console.log('Lat: ', data.geometry.location.lat());
            console.log('Lng: ', data.geometry.location.lng());
        });
    }
});