const current = {
    'lat': 25.2048493,
    'lng': 55.270782800000006
}
const markers = [
    { 'lat': 25.20668184313425, 'lng': 55.267206404461604 },
    { 'lat': 25.20132334621353, 'lng': 55.26111242557977 },
    { 'lat': 25.205538207283162, 'lng': 55.25284049297784 },
    { 'lat': 25.19897953638515, 'lng': 55.2387857177398 },
    { 'lat': 25.238044823942925, 'lng': 55.296850178494196 },
    { 'lat': 25.179957999999438, 'lng': 55.31504628445123 },
    { 'lat': 25.23649206111235, 'lng': 55.341825459255915 },
    { 'lat': 25.182132872402253, 'lng': 55.29101369167779 },
    { 'lat': 25.13755480247892, 'lng': 55.261917088284235 },
    { 'lat': 25.16179532947713, 'lng': 55.4960632064483 },
    { 'lat': 25.125743571107243, 'lng': 55.45349118496392 }
];

const path = [
    { lat: 25.08615674084264, lng: 55.392980549587946 },
    { lat: 25.09337853824279, lng: 55.3871011474273 },
    { lat: 25.10006311847188, lng: 55.381779644741755 },
    { lat: 25.10612556137623, lng: 55.37662980343316 },
    { lat: 25.10612556137623, lng: 55.37662980343316 },
    { lat: 25.116293938094568, lng: 55.367531750454646 },
    { lat: 25.119631959901408, lng: 55.36508761226264 },
    { lat: 25.129112591936888, lng: 55.35684786616889 },
    { lat: 25.13797087820766, lng: 55.34963808833686 },
    { lat: 25.150091158485914, lng: 55.34014809558596 },
    { lat: 25.163453748754122, lng: 55.32916176746096 },
    { lat: 25.171789238404468, lng: 55.32287021218599 },
    { lat: 25.180333729378265, lng: 55.31531711160005 }
];


$(function () {
    var map;
    function initializePlotMarker() {
        const options = {
            center: new google.maps.LatLng(25.2048493, 55.270782800000006),
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            navigationControlOptions: { style: google.maps.NavigationControlStyle.SMALL }
        };
        map = new google.maps.Map(document.getElementById("plotMarkerMapHolder"), options);
    }
    //google.maps.event.addDomListener(window, 'load', initializePlotMarker);
    initializePlotMarker();

    $('#plotMarker').on('click', () => {
        var marker = markers.map(v => {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(v.lat, v.lng),
                map: map
            });
        });
    });

    var icon = new google.maps.MarkerImage("http://maps.google.com/mapfiles/ms/micons/blue.png");


    function moveMarker(map, marker, lat, lon) {
        marker.setPosition(new google.maps.LatLng(lat, lon));
        map.panTo(new google.maps.LatLng(lat, lon));
    }

    function autoRefresh() {
        var i, marker;
        marker = new google.maps.Marker({ map: map, icon: icon });
        for (i = 0; i < path.length; i++) {
            setTimeout((path) => {
                moveMarker(map, marker, path.lat, path.lng);
            }, 500 * i, path[i]);
        }
    }

    $('#plotPath').on('click', () => {
        autoRefresh();
    });
});