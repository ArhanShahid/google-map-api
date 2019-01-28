$(() => {
    const pinDropMapOptions = {
        center: new google.maps.LatLng(24.8614622, 67.00993879999999),
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        }
    };
    const pinDropMap = new google.maps.Map(document.getElementById("pinDropMapHolder"), pinDropMapOptions);
    let pinDropMapAddress = null;
    google.maps.event.addListener(pinDropMap, 'click', function (event) {
        let marker = new google.maps.Marker({
            position: event.latLng,
            map: pinDropMap
        });
        if (pinDropMapAddress == null) {
            pinDropMapAddress = marker;
            $('#pinDropText').html("Latitude : " + pinDropMapAddress.position.lat() + " Longitude : " + pinDropMapAddress.position.lng());
        } else {
            pinDropMapAddress.setMap(null);
            pinDropMapAddress = null;
            pinDropMapAddress = marker;
            $('#pinDropText').html("Latitude : " + pinDropMapAddress.position.lat() + " Longitude : " + pinDropMapAddress.position.lng());
        }
    });


});