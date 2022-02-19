var map = L.map('map').setView([45.514247391764286, -122.67706916257266], 11);

  // load a tile layer
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function onEachFeature(feature, layer) {
  if (feature.properties && feature.properties.popupContent) {
    layer.bindPopup(feature.properties.popupContent);
  }
}


var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Place": "Portland Art Museum",
        "popupContent": "<b>Portland Art Museum</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.68256233430418,
          45.524350727038914
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "In Other Words Feminist Community Center",
        "popupContent": "<b>In Other Words Feminist Community Center</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.66670711487463,
          45.56517435432024
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "East Rose Garden",
        "popupContent": "<b>East Rose Garden</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.64345408956348,
          45.51018790538929
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "Crystal Springs Rhododendron Garden",
        "popupContent": "<b>Crystal Springs Rhododendron Garden</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.63521769967025,
          45.48159161524599
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "Oaks Amusement Park",
        "popupContent": "<b>Oak Amusement Park</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.65816993703997,
          45.47381572363657
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "The Freaky Buttrue Peculiarium and Museum",
        "popupContent": "<b>The Freaky Buttrue Peculiarium and Museum</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.69663775963218,
          45.53740770254173
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "Portland International Airport",
        "popupContent": "<b>Portland International Airport</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.59741829725552,
          45.59838641891372
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "Portland Japanese Garden",
        "popupContent": "<b>Portland Japanese Garden</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.70453498902641,
          45.52916120135958
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "Oregon Zoo",
        "popupContent": "<b>Oregon Zoo</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.70235349737631,
          45.51380286923782
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Place": "Oregon Maritime Musesum",
        "popupContent": "<b>Oregon Maritime Museum</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.66926238412097,
          45.52455272692468
        ]
      }
    }
  ]
};


L.geoJSON(geojsonFeature, {
  onEachFeature: onEachFeature
}).addTo(map);

