      require(["esri/views/MapView", "esri/Map", "esri/layers/FeatureLayer", "esri/layers/GeoJSONLayer"], function (MapView, Map, FeatureLayer, GeoJSONLayer) {
        
        
        var map = new Map({
          basemap: "streets"
        });
    
        
  const webmap = new Map({
          portalItem: {
            // autocasts as new PortalItem()
            id: "5174c35c3e104f82bdb52917e033d29b"
          }
        });
    

        var view = new MapView({
          map: webmap,
          container: "viewDiv",
          map: map,
          center: [-122.66264960824265, 45.515690836591375],
          scale: 25000
        });
        
        var featureLayer_1 = new FeatureLayer({
  url: "https://services5.arcgis.com/W1uyphp8h2tna3qJ/arcgis/rest/services/Buildings/FeatureServer"
});map.add(featureLayer_1);

var featureLayer_2 = new FeatureLayer({
  url: "https://services.arcgis.com/uCXeTVveQzP4IIcx/ArcGIS/rest/services/Bike_Routes/FeatureServer"
});map.add(featureLayer_2);
        
     
// Adding points via features/gjson       

//function onEachFeature(feature, layer) {
  //if (feature.properties && feature.properties.popupContent) {
    //layer.bindPopup(feature.properties.popupContent);
  //}
//}


// create a geojson layer from geojson feature collection
const geojson = {                
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      id: 1,
      "properties": {
        "Place": "Portland Art Museum",
        "popupContent": "<b>Portland Art Museum</b>"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [ [
          -122.68256233430418,
          45.524350727038914
        ]
       ]
      }
    },
    {
      "type": "Feature",
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
        
// create a new blob from geojson featurecollection
const blob = new Blob([JSON.stringify(geojson)], {
  type: "application/json"
});

// URL reference to the blob
const url = URL.createObjectURL(blob);
// create new geojson layer using the blob url
const layer = new GeoJSONLayer({
  url
});


//L.geoJSON(geojsonFeature, {
  //onEachFeature: onEachFeature
//}).addTo(map);
        
      });
