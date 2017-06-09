mapboxgl.accessToken = 'pk.eyJ1IjoiZHJla25vciIsImEiOiJjajNsaDBhNWkwMDRuMnJvNzhjMHYwdHNrIn0.l7Y4BiSX_Vhx6nBVo_T6TA';

// Limite du nord de la france au sud de la france
var boundsFr = [
    [-4.85, 42.32], // coordonnée Sud-Ouest 
    [8.2, 51.1]  // coordonnée Nord-Est
];


var mymapfr = new mapboxgl.Map({
  container: 'mapfr', // container id
  style: 'mapbox://styles/dreknor/cj3k17i1y002v2spw2malrfrh',// URL de la carte
  center: [1.6, 46.9], // centrer la position
  zoom: 5, // zoom
  maxBounds: boundsFr // Mise en place de la limite
});


// Limite sur la carte de la Guadeloupe
var boundsGuadeloupe = [
    [-61.92, 15.84], // coordonnée Sud-Ouest 
    [-60.939789, 16.52]  // coordonnée Nord-Est
];

var mapGuadeloupe = new mapboxgl.Map({
  container: 'Guadeloupe', // container id
  style: 'mapbox://styles/dreknor/cj3k17i1y002v2spw2malrfrh',// URL de la carte
  center: [-61.4, 16.10], // centrer la position
  zoom: 5.8, // zoom
  maxBounds: boundsGuadeloupe // Mise en place de la limite
});

// disable mapGuadeloupe rotation using right click + drag
mapGuadeloupe.dragRotate.disable();

// disable mapGuadeloupe rotation using touch rotation gesture
mapGuadeloupe.touchZoomRotate.disableRotation(); 

// Limite sur la carte de la Martinique
var boundsMartinique = [
    [-61.360016, 14.4], // coordonnée Sud-Ouest 
    [-60.678864, 14.9 ]  // coordonnée Nord-Est
];

var mapMartinique = new mapboxgl.Map({
  container: 'Martinique', // container id
  style: 'mapbox://styles/dreknor/cj3k17i1y002v2spw2malrfrh',// URL de la carte
  center: [-61.024174000000016, 14.641528], // centrer la position
  zoom: 5.8, // zoom
  maxBounds: boundsMartinique // Mise en place de la limite
});

// disable mapMartinique rotation using right click + drag
mapMartinique.dragRotate.disable();

// disable mapMartinique rotation using touch rotation gesture
mapMartinique.touchZoomRotate.disableRotation(); 

// Limite sur la carte de la Guyane
var boundsGuyane = [
    [-56, 1.7], // coordonnée Sud-Ouest 
    [-50.5, 5.9]  // coordonnée Nord-Est
];

var mapGuyane = new mapboxgl.Map({
  container: 'Guyane', // container id
  style: 'mapbox://styles/dreknor/cj3k17i1y002v2spw2malrfrh',// URL de la carte
  center: [-53.125782000000015, 3.933888999999999], // centrer la position
  zoom: 3.5, // zoom
  maxBounds: boundsGuyane // Mise en place de la limite
});

// disable mapGuyane rotation using right click + drag
mapGuyane.dragRotate.disable();

// disable mapGuyane rotation using touch rotation gesture
mapGuyane.touchZoomRotate.disableRotation();

// Limite sur la carte de la Réunion
var boundsReunion = [
    [54.927521, -21.48], // coordonnée Sud-Ouest 
    [56.048126, -20.691892]  // coordonnée Nord-Est
];

var mapReunion = new mapboxgl.Map({
  container: 'Reunion', // container id
  style: 'mapbox://styles/dreknor/cj3k17i1y002v2spw2malrfrh',// URL de la carte
  center: [55.536384, -21.115141], // centrer la position
  zoom: 5.8, // zoom
  maxBounds: boundsReunion // Mise en place de la limite
});

// disable mapReunion rotation using right click + drag
mapReunion.dragRotate.disable();

// disable mapReunion rotation using touch rotation gesture
mapReunion.touchZoomRotate.disableRotation();

// Limite sur la carte de Mayotte
var boundsMayotte = [
    [44.9, -13], // coordonnée Sud-Ouest 
    [45.37, -12.65]  // coordonnée Nord-Est
];


var mapMayotte = new mapboxgl.Map({
  container: 'Mayotte', // container id
  style: 'mapbox://styles/dreknor/cj3k17i1y002v2spw2malrfrh',// URL de la carte
  center: [45.130743, -12.809645 ], // centrer la position
  zoom: 6.5, // zoom
  maxBounds: boundsMayotte // Mise en place de la limite
});

// disable mapMayotte rotation using right click + drag
mapMayotte.dragRotate.disable();

// disable mapMayotte rotation using touch rotation gesture
mapMayotte.touchZoomRotate.disableRotation();


// Limite sur la carte de la Corse
var boundsCorse = [
    [7.9, 41.3], // coordonnée Sud-Ouest 
    [10, 43.109004]  // coordonnée Nord-Est
];

var mapCorse = new mapboxgl.Map({
  container: 'Corse', // container id
  style: 'mapbox://styles/dreknor/cj3k17i1y002v2spw2malrfrh',// URL de la carte
  center: [9.022892599999986, 42.0396042], // centrer la position
  zoom: 4.89 ,// zoom
  maxBounds: boundsCorse // Mise en place de la limite
});

// disable mapCorse rotation using right click + drag
mapCorse.dragRotate.disable();

// disable mapCorse rotation using touch rotation gesture
mapCorse.touchZoomRotate.disableRotation();