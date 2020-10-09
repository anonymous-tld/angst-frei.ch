var map = L.map('map', {
  center: [48.2, 16.3], // EDIT latitude, longitude to re-center map
  zoom: 4,  // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
  scrollWheelZoom: true
});

/* Control panel to display map layers */
var controlLayers = L.control.layers( null, null, {
  position: "topright",
  collapsed: false
}).addTo(map);

L.Control.geocoder().addTo(map);

// display Carto basemap tiles with light features and labels
var light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
controlLayers.addBaseLayer(light, 'Carto Light basemap');

/* Stamen colored terrain basemap tiles with labels */
var terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
}); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
controlLayers.addBaseLayer(terrain, 'Stamen Terrain basemap');

// see more basemap options at https://leaflet-extras.github.io/leaflet-providers/preview/
geocoder = new L.Control.Geocoder.Nominatim();

// Read markers data from data.csv
$.get('/assets/data/demotermine_geo.csv', function(csvString) {

  // Use PapaParse to convert string to array of objects
  var data = Papa.parse(csvString, {header: true, dynamicTyping: true, skipEmptyLines: true}).data;

  // For each row in data, create a marker and add it to the map
  // For each row, columns `Latitude`, `Longitude`, and `Title` are required
  for (var i in data) {
    var row = data[i]

    if (row['latitude'] != "") {
      var marker = L.marker([row['latitude'], row['longitude']], {
        opacity: 1
      }).bindPopup("Stadt: " + row.stadt + "<br/>Datum: " + row.datum + "<br/>Uhrzeit: " + row.uhrzeit + "<br/>Treffpunkt: " + row.treffpunkt + "<br/>Protestform: " + row.protestform)
      marker.addTo(map)
    } else {
      console.log("Keine Koordinaten verfügbar");
      console.log(row);
    }
  }

})
