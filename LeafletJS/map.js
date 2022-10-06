
let map = L.map('map').setView([-34.921355, -57.954526], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker_info = L.marker([-34.903425, -57.937721]).addTo(map);
marker_info.bindPopup("<b>Facultad de Infomatica</b><br>UNLP");

let marker_ign = L.marker([-34.57188052302486, -58.44030814355404]).addTo(map);
marker_ign.bindPopup("<b>IGN</b>");

/*
function onMapClick(e) {
    console.log("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);
*/

let popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);


//geoJson
let geojson = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Polygon",
                "coordinates": [
                    [
                        [
                            -57.92815089225769,
                            -34.90876579631123
                        ],
                        [
                            -57.92686343193054,
                            -34.90971601107709
                        ],
                        [
                            -57.92574763298034,
                            -34.908818586308946
                        ],
                        [
                            -57.92587637901306,
                            -34.9081147168819
                        ],
                        [
                            -57.926520109176636,
                            -34.90792115173162
                        ],
                        [
                            -57.92711019515991,
                            -34.90806192643163
                        ],
                        [
                            -57.927550077438354,
                            -34.90830828157586
                        ],
                        [
                            -57.92815089225769,
                            -34.90876579631123
                        ]
                    ]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [
                        -57.957000732421875,
                        -34.919718993622055
                    ],
                    [
                        -58.447265625,
                        -34.61173601463315
                    ]
                ]
            }
        }
    ]
}

L.geoJSON(geojson).addTo(map);