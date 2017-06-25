mapboxgl.accessToken = 'pk.eyJ1IjoibWhhaWRvIiwiYSI6ImNqMzl5ZzdkcjAwYmMyd283aHV1Z2Exd2UifQ.j0YUYQFMBDVBLL1fRi2sFQ';
/* eslint-disable */
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mhaido/cj41el5qs4c732rs0kauxzdku', //hosted style id
    center: [2.285156,48.187148], // starting position
    zoom: 5.1 // starting zoom
});

var draw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
        polygon: true,
        trash: true
    }
});
map.addControl(draw);

var calcButton = document.getElementById('calculate');
calcButton.onclick = function() {
    var data = draw.getAll();
    if (data.features.length > 0) {
        var area = turf.area(data);
        // restrict to area to 2 decimal points
        var rounded_area = Math.round(area*100)/100;
        var answer = document.getElementById('calculated-area');
        answer.innerHTML = '<p><strong>' + rounded_area + '</strong></p><p>meters carre</p>';
    } else {
        alert("Dessinez une zone pour voir la liste des cafs les plus proches!");
    }
};