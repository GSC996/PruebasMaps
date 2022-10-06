import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import { CartoDB, OSM } from 'ol/source';

const mapConfig = {
  'layers': [
    {
      'type': 'cartodb',
      'options': {
        'cartocss_version': '2.1.1',
        'cartocss': '#layer { polygon-fill: #565faf; }',
      },
    },
  ],
};

function setArea(n) {
  mapConfig.layers[0].options.sql =
    'select * from european_countries_e where area > ' + n;
}
const areaSelect = document.getElementById('country-area');
setArea(areaSelect.value);

const cartoDBSource = new CartoDB({
  account: 'documentation',
  config: mapConfig,
});

areaSelect.addEventListener('change', function () {
  setArea(this.value);
  cartoDBSource.setConfig(mapConfig);
});


const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
    new TileLayer({
      source: cartoDBSource,
    }),
  ],
  target: 'map',
  view: new View({
    //projection: 'EPSG:27700',
    center: [0, 0],
    zoom: 2,
  }),
});