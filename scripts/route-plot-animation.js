$(() => {

    const path = [{
            lat: 25.08615674084264,
            lng: 55.392980549587946
        },
        {
            lat: 25.09337853824279,
            lng: 55.3871011474273
        },
        {
            lat: 25.10006311847188,
            lng: 55.381779644741755
        },
        {
            lat: 25.10612556137623,
            lng: 55.37662980343316
        },
        {
            lat: 25.10612556137623,
            lng: 55.37662980343316
        },
        {
            lat: 25.116293938094568,
            lng: 55.367531750454646
        },
        {
            lat: 25.119631959901408,
            lng: 55.36508761226264
        },
        {
            lat: 25.129112591936888,
            lng: 55.35684786616889
        },
        {
            lat: 25.13797087820766,
            lng: 55.34963808833686
        },
        {
            lat: 25.150091158485914,
            lng: 55.34014809558596
        },
        {
            lat: 25.163453748754122,
            lng: 55.32916176746096
        },
        {
            lat: 25.171789238404468,
            lng: 55.32287021218599
        },
        {
            lat: 25.180333729378265,
            lng: 55.31531711160005
        }
    ];


    let map;

    const options = {
        center: new google.maps.LatLng(25.2048493, 55.270782800000006),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };

    map = new google.maps.Map(document.getElementById('route-plot-animation-map'), options);

    const icon = new google.maps.MarkerImage('http://maps.google.com/mapfiles/ms/micons/blue.png');

    const moveMarker = (map, marker, lat, lon) => {
        marker.setPosition(new google.maps.LatLng(lat, lon));
        map.panTo(new google.maps.LatLng(lat, lon));
    }

    const autoRefresh = () => {
        let i, marker;
        marker = new google.maps.Marker({
            map: map,
            icon: icon
        });
        for (i = 0; i < path.length; i++) {
            setTimeout((path) => moveMarker(map, marker, path.lat, path.lng), 500 * i, path[i]);
        }
    }

    $('#route-plot-animation').on('click', () => autoRefresh());
})