function key_by_value(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

var state_id_map = {
    "1": "Andaman and Nicobar",
    "2": "Andhra Pradesh",
    "3": "Arunachal Pradesh",
    "4": "Assam",
    "5": "Bihar",
    "6": "Chandigarh",
    "7": "Chhattisgarh",
    "8": "Dadra and Nagar",
    "9": "Daman and Diu",
    "10": "Delhi",
    "11": "Goa",
    "12": "Gujarat",
    "13": "Haryana",
    "14": "Himachal Pradesh",
    "15": "Jammu and Kashmir",
    "16": "Jharkhand",
    "17": "Karnataka",
    "18": "Kerala",
    "19": "Lakshadweep",
    "20": "Madhya Pradesh",
    "21": "Maharashtra",
    "22": "Manipur",
    "23": "Meghalaya",
    "24": "Mizoram",
    "25": "Nagaland",
    "26": "Orissa",
    "27": "Puducherry",
    "28": "Punjab",
    "29": "Rajasthan",
    "30": "Sikkim",
    "31": "Tamil Nadu",
    "32": "Tripura",
    "33": "Uttar Pradesh",
    "34": "Uttaranchal",
    "35": "West Bengal",
};
var corono_cases = {
    // state: [confirmed, discharged, death]
    "Andhra Pradesh": [3, 0, 0],
    "Chhattisgarh": [1, 0, 0],
    "Delhi": [27, 5, 1],
    "Gujarat": [14, 0, 0],
    "Haryana": [17, 0, 0],
    "Himachal Pradesh": [2, 0, 0],
    "Karnataka": [20, 2, 1],
    "Kerala": [52, 3, 0],
    "Madhya Pradesh": [4, 0, 0],
    "Maharashtra": [63, 0, 2],
    "Odisha": [2, 0, 0],
    "Puducherry": [1, 0, 0],
    "Punjab": [13, 0, 1],
    "Rajasthan": [24, 3, 0],
    "Tamil Nadu": [6, 1, 0],
    "Telengana": [21, 1, 0],
    "Chandigarh": [5, 0, 0],
    "Jammu and Kashmir": [4, 0, 0],
    "Ladakh": [13, 0, 0],
    "Uttar Pradesh": [25, 9, 0],
    "Uttarakhand": [3, 0, 0],
    "West Bengal": [4, 0, 0],
};

state_ids = []
corona_count = []
for (var state_name in corono_cases) {
    state_ids.push(key_by_value(state_id_map, state_name))
    corona_count.push(corono_cases[state_name][0])
}

var data = [
    {
        // coloraxis: "coloraxis",
        type: 'choroplethmapbox',
        geojson: "js/india_state.geojson",
        locations: state_ids,
        z: corona_count,
        marker: { line: { color: "#ccc", width: 1 }, opacity: 0.5 },
        colorbar: { y: 0, yanchor: "bottom", title: { text: "Confirmed Cases", side: "right" } },
    },
    // { type: "scattermapbox", lon: [77], lat: [21], marker: { size: 20, color: 'purple' } },
];

var layout = {
    mapbox: { style: "carto-positron", center: { lat: 22, lon: 77 }, zoom: 3.75 },
    margin: { r: 0, t: 0, b: 0, l: 0 },
    // coloraxis: { showscale: false, colorscale: "Viridis" }
};


var mapboxAccessToken = 'pk.eyJ1IjoibWljaGFlbGphaXNvbiIsImEiOiJjazgybG4xNnowM213M2Ryc2RqaWY1dHViIn0._IcjeNxp8iTwTC3w1Ujgmg';
Plotly.setPlotConfig({ mapboxAccessToken: mapboxAccessToken });
Plotly.newPlot('map-plot', data, layout);


// mapboxgl.accessToken = mapboxAccessToken;
// var map = new mapboxgl.Map({
//     container: 'map-plot2',
//     style: 'mapbox://styles/mapbox/streets-v11'
// });
