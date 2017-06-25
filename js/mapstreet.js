 mapboxgl.accessToken = 'pk.eyJ1IjoibWhhaWRvIiwiYSI6ImNqMzl5ZzdkcjAwYmMyd283aHV1Z2Exd2UifQ.j0YUYQFMBDVBLL1fRi2sFQ'; // replace this with your access token
    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mhaido/cj41el5qs4c732rs0kauxzdku', // replace this with your style
      center: [2.285156,48.187148],
      zoom: 5,
    });
  map.on('click', function(e) {
  var features = map.queryRenderedFeatures(e.point, {
    layers: ['dataset'] // replace this with the name of the layer
  });

  if (!features.length) {
    return;
  }

  var feature = features[0];

  var popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML('<p>' +feature.properties.Location+ '</p>')
    .setLngLat(feature.geometry.coordinates)
    .addTo(map);
});
map.addControl(new mapboxgl.GeolocateControl());
map.addControl(new MapboxDirections({
    accessToken: mapboxgl.accessToken
}), 'top-left');