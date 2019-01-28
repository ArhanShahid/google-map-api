$(() => {

    const markers = [{
            'lat': 25.20668184313425,
            'lng': 55.267206404461604
        },
        {
            'lat': 25.20132334621353,
            'lng': 55.26111242557977
        },
        {
            'lat': 25.205538207283162,
            'lng': 55.25284049297784
        },
        {
            'lat': 25.19897953638515,
            'lng': 55.2387857177398
        },
        {
            'lat': 25.238044823942925,
            'lng': 55.296850178494196
        },
        {
            'lat': 25.179957999999438,
            'lng': 55.31504628445123
        },
        {
            'lat': 25.23649206111235,
            'lng': 55.341825459255915
        },
        {
            'lat': 25.182132872402253,
            'lng': 55.29101369167779
        },
        {
            'lat': 25.13755480247892,
            'lng': 55.261917088284235
        },
        {
            'lat': 25.16179532947713,
            'lng': 55.4960632064483
        },
        {
            'lat': 25.125743571107243,
            'lng': 55.45349118496392
        }
    ];

    const options = {
        center: new google.maps.LatLng(25.2048493, 55.270782800000006),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };

    const plotMultipleMarkerMap = new google.maps.Map(document.getElementById('plotMultipleMarkerHolder'), options);
    markers.map(v => new google.maps.Marker({
        position: new google.maps.LatLng(v.lat, v.lng),
        map: plotMultipleMarkerMap
    }))

});