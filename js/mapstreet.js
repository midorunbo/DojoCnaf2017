mapboxgl.accessToken = 'pk.eyJ1IjoibWhhaWRvIiwiYSI6ImNqMzl5ZzdkcjAwYmMyd283aHV1Z2Exd2UifQ.j0YUYQFMBDVBLL1fRi2sFQ';

var cafrouen = [1.0999709999999823, 49.44323199999999];
var cafhavre = [0.10792900000001282, 49.49437]; 
var cafdieppe = [1.0774830000000293, 49.922992]; 
var cafrennes = [-1.6777925999999752, 48.117266]; 
var caflille = [3.057256000000052, 50.62924999999999]; 
var caftoulouse = [1.4442090000000007, 43.604652]; 

var cafparis = [2.3522219000000177, 48.85661400000001];
var map = new mapboxgl.Map({
    container: 'mapworld',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [1.6, 46.9], // centrer la position
    zoom: 5.1
}); 



// create the popup
var popup = new mapboxgl.Popup({offset: 25})
    .setText('ici cest Pariiiiiis '); 

var popuprouen = new mapboxgl.Popup({offset: 25})
    .setText('Caf de Rouen '); 

var popuplille = new mapboxgl.Popup({offset: 25})
    .setText('Caf de Lille '); 
		
var popupdieppe = new mapboxgl.Popup({offset: 25})
    .setText(' Caf de Dieppe '); 
	
var popuptoulouse = new mapboxgl.Popup({offset: 25})
    .setText('caf de Toulouse ');  
	
var popuphavre = new mapboxgl.Popup({offset: 25})
    .setText('Caf du havre ');
 	
	
// create DOM element for the marker
var el = document.createElement('div');
el.id = 'marker';
var el1 = document.createElement('div');
el1.id = 'marker'; 
var el2 = document.createElement('div');
el2.id = 'marker';
var el3 = document.createElement('div');
el3.id = 'marker';
var el4 = document.createElement('div');
el4.id = 'marker';
var el5 = document.createElement('div');
el5.id = 'marker'; 

// create the marker 1  Paris
new mapboxgl.Marker(el, {offset:[-25, -25]})
    .setLngLat(cafparis)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map); 
// Marker Rouen 	
new mapboxgl.Marker(el1, {offset:[-25, -25]})
    .setLngLat(cafrouen)
    .setPopup(popuprouen) // sets a popup on this marker
    .addTo(map);   
// Marker le Havre  	
new mapboxgl.Marker(el2, {offset:[-25, -25]})
    .setLngLat(cafhavre)
    .setPopup(popuphavre) // sets a popup on this marker
    .addTo(map);  
// Marker Dieppe 	
new mapboxgl.Marker(el3, {offset:[-25, -25]})
    .setLngLat(cafdieppe)
    .setPopup(popupdieppe) // sets a popup on this marker
    .addTo(map); 
// Marker Toulouse 	
new mapboxgl.Marker(el4, {offset:[-25, -25]})
    .setLngLat(caftoulouse)
    .setPopup(popuptoulouse) // sets a popup on this marker
    .addTo(map); 
//Marker Lille	
new mapboxgl.Marker(el5, {offset:[-25, -25]})
    .setLngLat(caflille)
    .setPopup(popuplille) // sets a popup on this marker
    .addTo(map); 