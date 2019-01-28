$(() => {

    const directionsService = new google.maps.DirectionsService;
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const routePlotMap = new google.maps.Map(document.getElementById('routePlotMapHolder'), {
        zoom: 13,
        center: new google.maps.LatLng(24.8614622, 67.00993879999999)
    });

    const markers = [{
            "lat": 24.886747933454497,
            "lng": 67.13865280151367
        },
        {
            "lat": 24.887059375335962,
            "lng": 67.1290397644043
        },
        {
            "lat": 24.874445351033874,
            "lng": 67.09659576416016
        }
    ];

    const calculateAndDisplayRoute = (directionsService, directionsDisplay, markers) => {
        let waypts = [];
        for (let i = 0; i < markers.length; i++) {
            waypts.push({
                location: markers[i],
                stopover: true
            });
        }
        directionsService.route({
            origin: markers[0],
            destination: markers[markers.length - 1],
            waypoints: waypts,
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING
        }, (response, status) => {
            (status === google.maps.DirectionsStatus.OK) ?
            directionsDisplay.setDirections(response):
                console.error('Directions request failed due to ' + status)

        });
    }

    directionsDisplay.setMap(routePlotMap);
    calculateAndDisplayRoute(directionsService, directionsDisplay, markers);
});
