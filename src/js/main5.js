import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import { defaults } from 'ol/control/defaults';

import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';

import KML from 'ol/format/KML';
import GeoJSON from 'ol/format/GeoJSON';

// Capa KML
const kmlLayer = new VectorLayer({
  source: new VectorSource({
    url: '/datos/zitu.kml',
    format: new KML(),
  }),
});

// Capa GeoJSON
const geojsonLayer = new VectorLayer({
  source: new VectorSource({
    url: '/datos/amenaza.geojson',
    format: new GeoJSON(),
  }),
});

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    kmlLayer,
  ],
  view: new View({
    center: fromLonLat([-74.083969, 4.648532]),
    zoom: 10,
  }),
  controls: defaults({
    zoom: true,
    attribution: false,
    rotate: true,
  }),
});

map.addLayer(geojsonLayer);
