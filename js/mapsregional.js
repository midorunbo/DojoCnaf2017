mapboxgl.accessToken = 'pk.eyJ1IjoiZHJla25vciIsImEiOiJjajNsaDBhNWkwMDRuMnJvNzhjMHYwdHNrIn0.l7Y4BiSX_Vhx6nBVo_T6TA';

// Limite du nord de la france au sud de la france
var boundsFr = [
    [-4.85, 42.32], // coordonnée Sud-Ouest 
    [8.2, 51.1]  // coordonnée Nord-Est
];


var mymapfr = new mapboxgl.Map({
  container: 'mapfr', // container id
  style: 'mapbox://styles/dreknor/cj3u6y6ou00022rkukcclmgun',// URL de la carte
  center: [1.6, 46.9], // centrer la position
  zoom: 5, // zoom
  maxBounds: boundsFr, // Mise en place de la limite
  minZoom: 5
});

mymapfr.addControl(new MapboxGeocoder({
	accessToken: mapboxgl.accessToken
}));

	
// Limite sur la carte de la Guadeloupe
var boundsGuadeloupe = [
    [-61.92, 15.84], // coordonnée Sud-Ouest 
    [-60.939789, 16.52]  // coordonnée Nord-Est
];

var mapGuadeloupe = new mapboxgl.Map({
  container: 'Guadeloupe', // container id
  style: 'mapbox://styles/dreknor/cj3u6y6ou00022rkukcclmgun',// URL de la carte
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
  style: 'mapbox://styles/dreknor/cj3u6y6ou00022rkukcclmgun',// URL de la carte
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
  style: 'mapbox://styles/dreknor/cj3u6y6ou00022rkukcclmgun',// URL de la carte
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
  style: 'mapbox://styles/dreknor/cj3u6y6ou00022rkukcclmgun',// URL de la carte
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
  style: 'mapbox://styles/dreknor/cj3u6y6ou00022rkukcclmgun',// URL de la carte
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
  style: 'mapbox://styles/dreknor/cj3u6y6ou00022rkukcclmgun',// URL de la carte
  center: [9.022892599999986, 42.0396042], // centrer la position
  zoom: 4.89 ,// zoom
  maxBounds: boundsCorse // Mise en place de la limite
});

// disable mapCorse rotation using right click + drag
mapCorse.dragRotate.disable();

// disable mapCorse rotation using touch rotation gesture
mapCorse.touchZoomRotate.disableRotation();

//////////////////////////////////////////////////////////

	
mapMartinique.on('load', function () {
   
    // When the user moves their mouse over the states-fill layer, we'll update the filter in
    // the state-fills-hover layer to only show the matching state, thus making a hover effect.
	
    mapMartinique.on("mousemove", "Martinique", function(e) {
		mapMartinique.setPaintProperty('Martinique', 'fill-opacity', 0.75);
    });

    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    mapMartinique.on("mouseleave", "Martinique", function() {
		mapMartinique.setPaintProperty('Martinique', 'fill-opacity', 1);
    });
	////////////////////////////////////////////////////////////////////////////
	mapGuadeloupe.on("mousemove", "Guadeloupe", function(e) {
		mapGuadeloupe.setPaintProperty('Guadeloupe', 'fill-opacity', 0.75);
    });

    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    mapGuadeloupe.on("mouseleave", "Guadeloupe", function() {
		mapGuadeloupe.setPaintProperty('Guadeloupe', 'fill-opacity', 1);
    });
	////////////////////////////////////////////////////////////////////////////
	mapGuyane.on("mousemove", "Guyane", function(e) {
		mapGuyane.setPaintProperty('Guyane', 'fill-opacity', 0.75);
    });
	
    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    mapGuyane.on("mouseleave", "Guyane", function() {
		mapGuyane.setPaintProperty('Guyane', 'fill-opacity', 1);
    });
	////////////////////////////////////////////////////////////////////////////
	mapReunion.on("mousemove", "Réunion", function(e) {
		mapReunion.setPaintProperty('Réunion', 'fill-opacity', 0.75);
    });
	
    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    mapReunion.on("mouseleave", "Réunion", function() {
		mapReunion.setPaintProperty('Réunion', 'fill-opacity', 1);
    });
	///////////////////////////////////////////////////////////////////////////
	mapMayotte.on("mousemove", "Mayotte", function(e) {
		mapMayotte.setPaintProperty('Mayotte', 'fill-opacity', 0.75);
    });

    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    mapMayotte.on("mouseleave", "Mayotte", function() {
		mapMayotte.setPaintProperty('Mayotte', 'fill-opacity', 1);
    });
	///////////////////////////////////////////////////////////////////////////
	mapCorse.on("mousemove", "Corse-du-Sud", function(e) {
		mapCorse.setPaintProperty('Corse-du-Sud', 'fill-opacity', 0.75);
    });
	
    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    mapCorse.on("mouseleave", "Corse-du-Sud", function() {
		mapCorse.setPaintProperty('Corse-du-Sud', 'fill-opacity', 1);
    });
	
	mapCorse.on("mousemove", "Haute-Corse", function(e) {
		mapCorse.setPaintProperty('Haute-Corse', 'fill-opacity', 0.75);
    });

    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    mapCorse.on("mouseleave", "Haute-Corse", function() {
		mapCorse.setPaintProperty('Haute-Corse', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	/////////////////////////////////BRETAGNE//////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	/////////////////////////////Ille-et-Vilaine///////////////////////////////
  
	mymapfr.on("mousemove", "Ille-et-Vilaine", function(e) {
		mymapfr.setPaintProperty('Ille-et-Vilaine', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Ille-et-Vilaine", function() {
		mymapfr.setPaintProperty('Ille-et-Vilaine', 'fill-opacity', 1);
    });
	
	////////////////////////////////Morbihan///////////////////////////////////
	
	mymapfr.on("mousemove", "Morbihan", function(e) {
		mymapfr.setPaintProperty('Morbihan', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Morbihan", function() {
		mymapfr.setPaintProperty('Morbihan', 'fill-opacity', 1);
    });
	
	///////////////////////////////Côtes-d'Armor//////////////////////////////
	
	mymapfr.on("mousemove", "Côtes-d'Armor", function(e) {
		mymapfr.setPaintProperty("Côtes-d'Armor", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Côtes-d'Armor", function() {
		mymapfr.setPaintProperty("Côtes-d'Armor", 'fill-opacity', 1);
    });
	////////////////////////////////Finistère/////////////////////////////////
	mymapfr.on("mousemove", "Finistère", function(e) {
		mymapfr.setPaintProperty('Finistère', 'fill-opacity', 0.75);
    });

    // Reset the state-fills-hover layer's filter when the mouse leaves the layer.
    mymapfr.on("mouseleave", "Finistère", function() {
		mymapfr.setPaintProperty('Finistère', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////BASSE-NORMANDIE/////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////Manche/////////////////////////////////
  
	mymapfr.on("mousemove", "Manche", function(e) {
		mymapfr.setPaintProperty('Manche', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Manche", function() {
		mymapfr.setPaintProperty('Manche', 'fill-opacity', 1);
    });
	
	////////////////////////////////////Calvados/////////////////////////////////
  
	mymapfr.on("mousemove", "Calvados", function(e) {
		mymapfr.setPaintProperty('Calvados', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Calvados", function() {
		mymapfr.setPaintProperty('Calvados', 'fill-opacity', 1);
    });
	
	////////////////////////////////////Orne////////////////////////////////////
  
	mymapfr.on("mousemove", "Orne", function(e) {
		mymapfr.setPaintProperty('Orne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Orne", function() {
		mymapfr.setPaintProperty('Orne', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////HAUTE-NORMANDIE/////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////Eure///////////////////////////////////
  
	mymapfr.on("mousemove", "Eure", function(e) {
		mymapfr.setPaintProperty('Eure', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Eure", function() {
		mymapfr.setPaintProperty('Eure', 'fill-opacity', 1);
    });
	
	//////////////////////////////Seine-Maritime/////////////////////////////////
  
	mymapfr.on("mousemove", "Seine-Maritime", function(e) {
		mymapfr.setPaintProperty('Seine-Maritime', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Seine-Maritime", function() {
		mymapfr.setPaintProperty('Seine-Maritime', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	//////////////////////////////Nord pas de calais///////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////Pas-de-Calais//////////////////////////
  
	mymapfr.on("mousemove", "Pas-de-Calais", function(e) {
		mymapfr.setPaintProperty('Pas-de-Calais', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Pas-de-Calais", function() {
		mymapfr.setPaintProperty('Pas-de-Calais', 'fill-opacity', 1);
    });
	
	//////////////////////////////Nord//////////////////////////////////////
  
	mymapfr.on("mousemove", "Nord", function(e) {
		mymapfr.setPaintProperty('Nord', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Nord", function() {
		mymapfr.setPaintProperty('Nord', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	//////////////////////////////////Picardie/////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////Aisne//////////////////////////////////
  
	mymapfr.on("mousemove", "Aisne", function(e) {
		mymapfr.setPaintProperty('Aisne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Aisne", function() {
		mymapfr.setPaintProperty('Aisne', 'fill-opacity', 1);
    });
	
	//////////////////////////////Oise//////////////////////////////////////
  
	mymapfr.on("mousemove", "Oise", function(e) {
		mymapfr.setPaintProperty('Oise', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Oise", function() {
		mymapfr.setPaintProperty('Oise', 'fill-opacity', 1);
    });
	
	//////////////////////////////Somme//////////////////////////////////////
  
	mymapfr.on("mousemove", "Somme", function(e) {
		mymapfr.setPaintProperty('Somme', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Somme", function() {
		mymapfr.setPaintProperty('Somme', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	/////////////////////////////Pays De La Loire//////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	////////////////////////////////////Mayenne////////////////////////////////
  
	mymapfr.on("mousemove", "Mayenne", function(e) {
		mymapfr.setPaintProperty('Mayenne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Mayenne", function() {
		mymapfr.setPaintProperty('Mayenne', 'fill-opacity', 1);
    });
	
	//////////////////////////////Sarthe//////////////////////////////////////
  
	mymapfr.on("mousemove", "Sarthe", function(e) {
		mymapfr.setPaintProperty('Sarthe', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Sarthe", function() {
		mymapfr.setPaintProperty('Sarthe', 'fill-opacity', 1);
    });
	
	//////////////////////////////Maine-et-Loire////////////////////////////////
  
	mymapfr.on("mousemove", "Maine-et-Loire", function(e) {
		mymapfr.setPaintProperty('Maine-et-Loire', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Maine-et-Loire", function() {
		mymapfr.setPaintProperty('Maine-et-Loire', 'fill-opacity', 1);
    });
	
	//////////////////////////////Vendée//////////////////////////////////////
  
	mymapfr.on("mousemove", "Vendée", function(e) {
		mymapfr.setPaintProperty('Vendée', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Vendée", function() {
		mymapfr.setPaintProperty('Vendée', 'fill-opacity', 1);
    });
	
	//////////////////////////////Loire-Atlantique/////////////////////////////
  
	mymapfr.on("mousemove", "Loire-Atlantique", function(e) {
		mymapfr.setPaintProperty('Loire-Atlantique', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Loire-Atlantique", function() {
		mymapfr.setPaintProperty('Loire-Atlantique', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////Centre//////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////Eure-et-Loir////////////////////////////////
  
	mymapfr.on("mousemove", "Eure-et-Loir", function(e) {
		mymapfr.setPaintProperty('Eure-et-Loir', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Eure-et-Loir", function() {
		mymapfr.setPaintProperty('Eure-et-Loir', 'fill-opacity', 1);
    });
	
	//////////////////////////////Loiret//////////////////////////////////////
  
	mymapfr.on("mousemove", "Loiret", function(e) {
		mymapfr.setPaintProperty('Loiret', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Loiret", function() {
		mymapfr.setPaintProperty('Loiret', 'fill-opacity', 1);
    });
	
	//////////////////////////////Loir-et-Cher////////////////////////////////
  
	mymapfr.on("mousemove", "Loir-et-Cher", function(e) {
		mymapfr.setPaintProperty('Loir-et-Cher', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Loir-et-Cher", function() {
		mymapfr.setPaintProperty('Loir-et-Cher', 'fill-opacity', 1);
    });
	
	//////////////////////////////Cher//////////////////////////////////////
  
	mymapfr.on("mousemove", "Cher", function(e) {
		mymapfr.setPaintProperty('Cher', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Cher", function() {
		mymapfr.setPaintProperty('Cher', 'fill-opacity', 1);
    });
	
	/////////////////////////////////Indre////////////////////////////////
	
	mymapfr.on("mousemove", "Indre", function(e) {
		mymapfr.setPaintProperty('Indre', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Indre", function() {
		mymapfr.setPaintProperty('Indre', 'fill-opacity', 1);
    });
	
	//////////////////////////Indre-et-Loire////////////////////////////////
	
	mymapfr.on("mousemove", "Indre-et-Loire", function(e) {
		mymapfr.setPaintProperty('Indre-et-Loire', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Indre-et-Loire", function() {
		mymapfr.setPaintProperty('Indre-et-Loire', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	////////////////////////////Poitou-Charentes///////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	/////////////////////////////////Charente//////////////////////////////////
  
	mymapfr.on("mousemove", "Charente", function(e) {
		mymapfr.setPaintProperty('Charente', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Charente", function() {
		mymapfr.setPaintProperty('Charente', 'fill-opacity', 1);
    });
	
	////////////////////////////////Vienne//////////////////////////////////////
  
	mymapfr.on("mousemove", "Vienne", function(e) {
		mymapfr.setPaintProperty('Vienne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Vienne", function() {
		mymapfr.setPaintProperty('Vienne', 'fill-opacity', 1);
    });
	
	//////////////////////////////Deux-Sèvres////////////////////////////////////
	
	mymapfr.on("mousemove", "Deux-Sèvres", function(e) {
		mymapfr.setPaintProperty('Deux-Sèvres', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Deux-Sèvres", function() {
		mymapfr.setPaintProperty('Deux-Sèvres', 'fill-opacity', 1);
    });
	
	//////////////////////////Charente-Maritime/////////////////////////////////
	
	mymapfr.on("mousemove", "Charente-Maritime", function(e) {
		mymapfr.setPaintProperty('Charente-Maritime', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Charente-Maritime", function() {
		mymapfr.setPaintProperty('Charente-Maritime', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	////////////////////////////////Aquitaine//////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	/////////////////////////////////Dordogne//////////////////////////////////
  
	mymapfr.on("mousemove", "Dordogne", function(e) {
		mymapfr.setPaintProperty('Dordogne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Dordogne", function() {
		mymapfr.setPaintProperty('Dordogne', 'fill-opacity', 1);
    });
	
	////////////////////////////////Lot-et-Garonne///////////////////////////////
  
	mymapfr.on("mousemove", "Lot-et-Garonne", function(e) {
		mymapfr.setPaintProperty('Lot-et-Garonne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Lot-et-Garonne", function() {
		mymapfr.setPaintProperty('Lot-et-Garonne', 'fill-opacity', 1);
    });
	
	//////////////////////////////Pyrénées-Atlantiques////////////////////////////
	
	mymapfr.on("mousemove", "Pyrénées-Atlantiques", function(e) {
		mymapfr.setPaintProperty('Pyrénées-Atlantiques', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Pyrénées-Atlantiques", function() {
		mymapfr.setPaintProperty('Pyrénées-Atlantiques', 'fill-opacity', 1);
    });
	
	///////////////////////////////////Landes////////////////////////////////////
	
	mymapfr.on("mousemove", "Landes", function(e) {
		mymapfr.setPaintProperty('Landes', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Landes", function() {
		mymapfr.setPaintProperty('Landes', 'fill-opacity', 1);
    });
	
	//////////////////////////////////Gironde////////////////////////////////////
	
	mymapfr.on("mousemove", "Gironde", function(e) {
		mymapfr.setPaintProperty('Gironde', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Gironde", function() {
		mymapfr.setPaintProperty('Gironde', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	////////////////////////////////Limousin///////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////Corrèze//////////////////////////////////
  
	mymapfr.on("mousemove", "Corrèze", function(e) {
		mymapfr.setPaintProperty('Corrèze', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Corrèze", function() {
		mymapfr.setPaintProperty('Corrèze', 'fill-opacity', 1);
    });
	
	///////////////////////////////////Creuse//////////////////////////////////
  
	mymapfr.on("mousemove", "Creuse", function(e) {
		mymapfr.setPaintProperty('Creuse', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Creuse", function() {
		mymapfr.setPaintProperty('Creuse', 'fill-opacity', 1);
    });
	
	/////////////////////////////////Haute-Vienne/////////////////////////////
	
	mymapfr.on("mousemove", "Haute-Vienne", function(e) {
		mymapfr.setPaintProperty('Haute-Vienne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Haute-Vienne", function() {
		mymapfr.setPaintProperty('Haute-Vienne', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	//////////////////////////////Midi-Pyrénées////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////Tarn-et-Garonne//////////////////////////
  
	mymapfr.on("mousemove", "Tarn-et-Garonne", function(e) {
		mymapfr.setPaintProperty('Tarn-et-Garonne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Tarn-et-Garonne", function() {
		mymapfr.setPaintProperty('Tarn-et-Garonne', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Lot///////////////////////////////////
  
	mymapfr.on("mousemove", "Lot", function(e) {
		mymapfr.setPaintProperty('Lot', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Lot", function() {
		mymapfr.setPaintProperty('Lot', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Aveyron/////////////////////////////
	
	mymapfr.on("mousemove", "Aveyron", function(e) {
		mymapfr.setPaintProperty('Aveyron', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Aveyron", function() {
		mymapfr.setPaintProperty('Aveyron', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Tarn///////////////////////////////
  
	mymapfr.on("mousemove", "Tarn", function(e) {
		mymapfr.setPaintProperty('Tarn', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Tarn", function() {
		mymapfr.setPaintProperty('Tarn', 'fill-opacity', 1);
    });
	
	/////////////////////////////////Ariège///////////////////////////////////
  
	mymapfr.on("mousemove", "Ariège", function(e) {
		mymapfr.setPaintProperty('Ariège', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Ariège", function() {
		mymapfr.setPaintProperty('Ariège', 'fill-opacity', 1);
    });
	
	//////////////////////////////////Haute-Garonne////////////////////////////
	
	mymapfr.on("mousemove", "Haute-Garonne", function(e) {
		mymapfr.setPaintProperty('Haute-Garonne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Haute-Garonne", function() {
		mymapfr.setPaintProperty('Haute-Garonne', 'fill-opacity', 1);
    });
	
	///////////////////////////////////Gers////////////////////////////////////
  
	mymapfr.on("mousemove", "Gers", function(e) {
		mymapfr.setPaintProperty('Gers', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Gers", function() {
		mymapfr.setPaintProperty('Gers', 'fill-opacity', 1);
    });
	
	/////////////////////////////////Hautes-Pyrénées////////////////////////////
	
	mymapfr.on("mousemove", "Hautes-Pyrénées", function(e) {
		mymapfr.setPaintProperty('Hautes-Pyrénées', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Hautes-Pyrénées", function() {
		mymapfr.setPaintProperty('Hautes-Pyrénées', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////Languedoc-Rouissillon///////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////Lozère//////////////////////////////////
  
	mymapfr.on("mousemove", "Lozère", function(e) {
		mymapfr.setPaintProperty('Lozère', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Lozère", function() {
		mymapfr.setPaintProperty('Lozère', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Gard///////////////////////////////////
  
	mymapfr.on("mousemove", "Gard", function(e) {
		mymapfr.setPaintProperty('Gard', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Gard", function() {
		mymapfr.setPaintProperty('Gard', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Hérault///////////////////////////////
	
	mymapfr.on("mousemove", "Hérault", function(e) {
		mymapfr.setPaintProperty('Hérault', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Hérault", function() {
		mymapfr.setPaintProperty('Hérault', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Aude/////////////////////////////////
  
	mymapfr.on("mousemove", "Aude", function(e) {
		mymapfr.setPaintProperty('Aude', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Aude", function() {
		mymapfr.setPaintProperty('Aude', 'fill-opacity', 1);
    });
	
	///////////////////////////////Pyrénées-Orientales/////////////////////////
  
	mymapfr.on("mousemove", "Pyrénées-Orientales", function(e) {
		mymapfr.setPaintProperty('Pyrénées-Orientales', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Pyrénées-Orientales", function() {
		mymapfr.setPaintProperty('Pyrénées-Orientales', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	/////////////////////////Provence-Alpes Côte D'Azur////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////Hautes-Alpes/////////////////////////////////
  
	mymapfr.on("mousemove", "Hautes-Alpes", function(e) {
		mymapfr.setPaintProperty('Hautes-Alpes', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Hautes-Alpes", function() {
		mymapfr.setPaintProperty('Hautes-Alpes', 'fill-opacity', 1);
    });
	
	///////////////////////////Alpes-de-Haute-Provence///////////////////////////
  
	mymapfr.on("mousemove", "Alpes-de-Haute-Provence", function(e) {
		mymapfr.setPaintProperty('Alpes-de-Haute-Provence', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Alpes-de-Haute-Provence", function() {
		mymapfr.setPaintProperty('Alpes-de-Haute-Provence', 'fill-opacity', 1);
    });
	
	/////////////////////////////////Alpes-Maritimes///////////////////////////////
	
	mymapfr.on("mousemove", "Alpes-Maritimes", function(e) {
		mymapfr.setPaintProperty('Alpes-Maritimes', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Alpes-Maritimes", function() {
		mymapfr.setPaintProperty('Alpes-Maritimes', 'fill-opacity', 1);
    });
	
	////////////////////////////////////////Var////////////////////////////////////
  
	mymapfr.on("mousemove", "Var", function(e) {
		mymapfr.setPaintProperty('Var', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Var", function() {
		mymapfr.setPaintProperty('Var', 'fill-opacity', 1);
    });
	
	////////////////////////////////////Vaucluse////////////////////////////////////
  
	mymapfr.on("mousemove", "Vaucluse", function(e) {
		mymapfr.setPaintProperty('Vaucluse', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Vaucluse", function() {
		mymapfr.setPaintProperty('Vaucluse', 'fill-opacity', 1);
    });
	
	////////////////////////////////Bouches-du-Rhône/////////////////////////////////
  
	mymapfr.on("mousemove", "Bouches-du-Rhône", function(e) {
		mymapfr.setPaintProperty('Bouches-du-Rhône', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Bouches-du-Rhône", function() {
		mymapfr.setPaintProperty('Bouches-du-Rhône', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////Rhône-Alpes/////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////Haute-Savoie/////////////////////////////////
  
	mymapfr.on("mousemove", "Haute-Savoie", function(e) {
		mymapfr.setPaintProperty('Haute-Savoie', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Haute-Savoie", function() {
		mymapfr.setPaintProperty('Haute-Savoie', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Ain/////////////////////////////////////
  
	mymapfr.on("mousemove", "Ain", function(e) {
		mymapfr.setPaintProperty('Ain', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Ain", function() {
		mymapfr.setPaintProperty('Ain', 'fill-opacity', 1);
    });
	
	////////////////////////////////////Rhône///////////////////////////////////
	
	mymapfr.on("mousemove", "Rhône", function(e) {
		mymapfr.setPaintProperty('Rhône', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Rhône", function() {
		mymapfr.setPaintProperty('Rhône', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Loire////////////////////////////////////
  
	mymapfr.on("mousemove", "Loire", function(e) {
		mymapfr.setPaintProperty('Loire', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Loire", function() {
		mymapfr.setPaintProperty('Loire', 'fill-opacity', 1);
    });
	
	////////////////////////////////////Ardèche////////////////////////////////////
  
	mymapfr.on("mousemove", "Ardèche", function(e) {
		mymapfr.setPaintProperty('Ardèche', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Ardèche", function() {
		mymapfr.setPaintProperty('Ardèche', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Drôme///////////////////////////////////
  
	mymapfr.on("mousemove", "Drôme", function(e) {
		mymapfr.setPaintProperty('Drôme', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Drôme", function() {
		mymapfr.setPaintProperty('Drôme', 'fill-opacity', 1);
    });
	////////////////////////////////////Isère////////////////////////////////////
  
	mymapfr.on("mousemove", "Isère", function(e) {
		mymapfr.setPaintProperty('Isère', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Isère", function() {
		mymapfr.setPaintProperty('Isère', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Savoie///////////////////////////////////
  
	mymapfr.on("mousemove", "Savoie", function(e) {
		mymapfr.setPaintProperty('Savoie', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Savoie", function() {
		mymapfr.setPaintProperty('Savoie', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////Auvergne////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////Allier//////////////////////////////////
  
	mymapfr.on("mousemove", "Allier", function(e) {
		mymapfr.setPaintProperty('Allier', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Allier", function() {
		mymapfr.setPaintProperty('Allier', 'fill-opacity', 1);
    });
	
	////////////////////////////////Puy-de-Dôme///////////////////////////////////
  
	mymapfr.on("mousemove", "Puy-de-Dôme", function(e) {
		mymapfr.setPaintProperty('Puy-de-Dôme', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Puy-de-Dôme", function() {
		mymapfr.setPaintProperty('Puy-de-Dôme', 'fill-opacity', 1);
    });
	
	/////////////////////////////////Haute-Loire///////////////////////////////////
	
	mymapfr.on("mousemove", "Haute-Loire", function(e) {
		mymapfr.setPaintProperty('Haute-Loire', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Haute-Loire", function() {
		mymapfr.setPaintProperty('Haute-Loire', 'fill-opacity', 1);
    });
	
	////////////////////////////////////Cantal////////////////////////////////////
  
	mymapfr.on("mousemove", "Cantal", function(e) {
		mymapfr.setPaintProperty('Cantal', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Cantal", function() {
		mymapfr.setPaintProperty('Cantal', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////Bougogne////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////Yonne//////////////////////////////////
  
	mymapfr.on("mousemove", "Yonne", function(e) {
		mymapfr.setPaintProperty('Yonne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Yonne", function() {
		mymapfr.setPaintProperty('Yonne', 'fill-opacity', 1);
    });
	
	////////////////////////////////Côte-d'Or///////////////////////////////////
  
	mymapfr.on("mousemove", "Côte-d'Or", function(e) {
		mymapfr.setPaintProperty("Côte-d'Or", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Côte-d'Or", function() {
		mymapfr.setPaintProperty("Côte-d'Or", 'fill-opacity', 1);
    });
	
	//////////////////////////////////Nièvre///////////////////////////////////
	
	mymapfr.on("mousemove", "Nièvre", function(e) {
		mymapfr.setPaintProperty('Nièvre', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Nièvre", function() {
		mymapfr.setPaintProperty('Nièvre', 'fill-opacity', 1);
    });
	
	///////////////////////////////////Saône-et-Loire////////////////////////////
  
	mymapfr.on("mousemove", "Saône-et-Loire", function(e) {
		mymapfr.setPaintProperty('Saône-et-Loire', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Saône-et-Loire", function() {
		mymapfr.setPaintProperty('Saône-et-Loire', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	////////////////////////////////Franche-Comté//////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////Belfort/////////////////////////////////
  
	mymapfr.on("mousemove", "Belfort", function(e) {
		mymapfr.setPaintProperty('Belfort', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Belfort", function() {
		mymapfr.setPaintProperty('Belfort', 'fill-opacity', 1);
    });
	
	////////////////////////////////Haute-Saônens///////////////////////////////
  
	mymapfr.on("mousemove", "Haute-Saônens", function(e) {
		mymapfr.setPaintProperty("Haute-Saônens", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Haute-Saônens", function() {
		mymapfr.setPaintProperty("Haute-Saônens", 'fill-opacity', 1);
    });
	
	//////////////////////////////////Doubs////////////////////////////////////
	
	mymapfr.on("mousemove", "Doubs", function(e) {
		mymapfr.setPaintProperty('Doubs', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Doubs", function() {
		mymapfr.setPaintProperty('Doubs', 'fill-opacity', 1);
    });
	
	//////////////////////////////////Jura Mountains///////////////////////////
  
	mymapfr.on("mousemove", "Jura Mountains", function(e) {
		mymapfr.setPaintProperty('Jura Mountains', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Jura Mountains", function() {
		mymapfr.setPaintProperty('Jura Mountains', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	////////////////////////////////////Alsace/////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////Bas-Rhin/////////////////////////////////
  
	mymapfr.on("mousemove", "Bas-Rhin", function(e) {
		mymapfr.setPaintProperty('Bas-Rhin', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Bas-Rhin", function() {
		mymapfr.setPaintProperty('Bas-Rhin', 'fill-opacity', 1);
    });
	
	////////////////////////////////Haut-Rhin///////////////////////////////
  
	mymapfr.on("mousemove", "Haut-Rhin", function(e) {
		mymapfr.setPaintProperty("Haut-Rhin", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Haut-Rhin", function() {
		mymapfr.setPaintProperty("Haut-Rhin", 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////Lorraine////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////Vosges////////////////////////////////
  
	mymapfr.on("mousemove", "Vosges", function(e) {
		mymapfr.setPaintProperty('Vosges', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Vosges", function() {
		mymapfr.setPaintProperty('Vosges', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Meuse/////////////////////////////////
  
	mymapfr.on("mousemove", "Meuse", function(e) {
		mymapfr.setPaintProperty("Meuse", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Meuse", function() {
		mymapfr.setPaintProperty("Meuse", 'fill-opacity', 1);
    });
	
	///////////////////////////////Meurhe-et-Moselle////////////////////////////
	
	mymapfr.on("mousemove", "Meurhe-et-Moselle", function(e) {
		mymapfr.setPaintProperty('Meurhe-et-Moselle', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Meurhe-et-Moselle", function() {
		mymapfr.setPaintProperty('Meurhe-et-Moselle', 'fill-opacity', 1);
    });
	
	//////////////////////////////////Moselle//////////////////////////////////
  
	mymapfr.on("mousemove", "Moselle", function(e) {
		mymapfr.setPaintProperty('Moselle', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Moselle", function() {
		mymapfr.setPaintProperty('Moselle', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	/////////////////////////////Champagne-Ardenne/////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	//////////////////////////////////Haute-Marne//////////////////////////////
  
	mymapfr.on("mousemove", "Haute-Marne", function(e) {
		mymapfr.setPaintProperty('Haute-Marne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Haute-Marne", function() {
		mymapfr.setPaintProperty('Haute-Marne', 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Aube/////////////////////////////////
  
	mymapfr.on("mousemove", "Aube", function(e) {
		mymapfr.setPaintProperty("Aube", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Aube", function() {
		mymapfr.setPaintProperty("Aube", 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Marne////////////////////////////////
	
	mymapfr.on("mousemove", "Marne", function(e) {
		mymapfr.setPaintProperty('Marne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Marne", function() {
		mymapfr.setPaintProperty('Marne', 'fill-opacity', 1);
    });
	
	//////////////////////////////////Ardennes/////////////////////////////////
  
	mymapfr.on("mousemove", "Ardennes", function(e) {
		mymapfr.setPaintProperty('Ardennes', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Ardennes", function() {
		mymapfr.setPaintProperty('Ardennes', 'fill-opacity', 1);
    });
	
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	/////////////////////////////Ile De France/////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////
	
	///////////////////////////////////Paris///////////////////////////////////
  
	mymapfr.on("mousemove", "Paris", function(e) {
		mymapfr.setPaintProperty('Paris', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Paris", function() {
		mymapfr.setPaintProperty('Paris', 'fill-opacity', 1);
    });
	
	///////////////////////////////Seine-Saint-Denis////////////////////////////
  
	mymapfr.on("mousemove", "Seine-Saint-Denis", function(e) {
		mymapfr.setPaintProperty("Seine-Saint-Denis", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Seine-Saint-Denis", function() {
		mymapfr.setPaintProperty("Seine-Saint-Denis", 'fill-opacity', 1);
    });
	
	/////////////////////////////////Val-de-Marne///////////////////////////////
	
	mymapfr.on("mousemove", "Val-de-Marne", function(e) {
		mymapfr.setPaintProperty('Val-de-Marne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Val-de-Marne", function() {
		mymapfr.setPaintProperty('Val-de-Marne', 'fill-opacity', 1);
    });
	
	/////////////////////////////////Hauts-de-Seine/////////////////////////////
  
	mymapfr.on("mousemove", "Hauts-de-Seine", function(e) {
		mymapfr.setPaintProperty('Hauts-de-Seine', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Hauts-de-Seine", function() {
		mymapfr.setPaintProperty('Hauts-de-Seine', 'fill-opacity', 1);
    });
	
	///////////////////////////////////Val-d'Oise/////////////////////////////////
  
	mymapfr.on("mousemove", "Val-d'Oise", function(e) {
		mymapfr.setPaintProperty("Val-d'Oise", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Val-d'Oise", function() {
		mymapfr.setPaintProperty("Val-d'Oise", 'fill-opacity', 1);
    });
	
	////////////////////////////////////Yvelines////////////////////////////////
  
	mymapfr.on("mousemove", "Yvelines", function(e) {
		mymapfr.setPaintProperty("Yvelines", 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Yvelines", function() {
		mymapfr.setPaintProperty("Yvelines", 'fill-opacity', 1);
    });
	
	/////////////////////////////////////Essonne///////////////////////////////
	
	mymapfr.on("mousemove", "Essonne", function(e) {
		mymapfr.setPaintProperty('Essonne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Essonne", function() {
		mymapfr.setPaintProperty('Essonne', 'fill-opacity', 1);
    });
	
	/////////////////////////////////Seien-et-Marne/////////////////////////////
  
	mymapfr.on("mousemove", "Seien-et-Marne", function(e) {
		mymapfr.setPaintProperty('Seien-et-Marne', 'fill-opacity', 0.75);
    });

    mymapfr.on("mouseleave", "Seien-et-Marne", function() {
		mymapfr.setPaintProperty('Seien-et-Marne', 'fill-opacity', 1);
    });
	
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////
		
	mymapfr.on('click', 'Departement', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.features[0].geometry.coordinates)
            .setHTML(e.features[0].properties.description)
            .addTo(mymapfr);
    });

    // Change the cursor to a pointer when the mouse is over the places layer.
    mymapfr.on('mouseenter', 'Departement', function () {
        mymapfr.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    mymapfr.on('mouseleave', 'Departement', function () {
        mymapfr.getCanvas().style.cursor = '';
    });
	
});