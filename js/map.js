var L = require('leaflet');
require('esri-leaflet');
//var popupTemplate = require('.src/popup.js');
var map = L.map('map').setView([32.837, -83.632], 10);

var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


