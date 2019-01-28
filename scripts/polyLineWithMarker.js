$(() => {

    const latLong = [{
            "lat": 24.886747933454497,
            "lng": 67.14895248413086
        },
        {
            "lat": 24.886747933454497,
            "lng": 67.13865280151367
        },
        {
            "lat": 24.887059375335962,
            "lng": 67.1290397644043
        },
        {
            "lat": 24.882543391192204,
            "lng": 67.11376190185547
        },
        {
            "lat": 24.874445351033874,
            "lng": 67.09659576416016
        },
        {
            "lat": 24.86634678017567,
            "lng": 67.08337783813477
        },
        {
            "lat": 24.858714949016232,
            "lng": 67.05780029296875
        },
        {
            "lat": 24.854197929104103,
            "lng": 67.03702926635742
        },
        {
            "lat": 24.846253804304137,
            "lng": 67.02518463134766
        }
    ];

    let plotData = null;

    const plotDataFilter = (data) => {
        const source = data[0];
        const destination = data[data.length - 1];
        const path = [];
        for (let i = 0; i < (data.length - 2); i++) {
            path.push(data[i + 1]);
        }
        return {
            source,
            destination,
            path
        }
    };


    plotData = plotDataFilter(latLong);

    const googleMapsLatLng = plotData.path.map((val) => new google.maps.LatLng(val.lat, val.lng));

    const polyLineWithMarkerOptions = {
        center: new google.maps.LatLng(plotData.source.lat, plotData.source.lng),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    const polyLineWithMarkerMap = new google.maps.Map(document.getElementById("polyLineWithMarkerMapHolder"), polyLineWithMarkerOptions);

    plotData.path.map((val) => new google.maps.Marker({
        position: {
            "lat": val.lat,
            "lng": val.lng
        },
        map: polyLineWithMarkerMap
    }));

    const flightPath = new google.maps.Polyline({
        path: googleMapsLatLng,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });

    flightPath.setMap(polyLineWithMarkerMap);
});