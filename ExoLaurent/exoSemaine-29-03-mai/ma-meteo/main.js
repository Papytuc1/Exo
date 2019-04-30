let lat = 43.610769;
let lon = 3.876716;
let macarte = null;
let markers = {
    "gaumont": {
        "lat": 43.60439390000001,
        "lon": 3.915343900000039
    },
    "comedie": {
        "lat": 43.6084213,
        "lon": 3.879910699999982
    }
};
let icon = L.icon({
    iconUrl: "customMarker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -76]
});
let markTab = [];
let i = 0;

function initMap() {
    let markTabDes = JSON.parse(localStorage.getItem("marker"));
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    markTabDes.forEach(element => {
        callRequest(element.lat, element.lng)
    });
    for (marker in markers) {
        callRequest(markers[marker].lat, markers[marker].lon)
    };
    macarte.on("click", function (e) {
        callRequest(e.latlng.lat, e.latlng.lng);
        markTab[i] = {
            lat: e.latlng.lat,
            lng: e.latlng.lng
        };
        localStorage.setItem("marker", JSON.stringify(markTab));
        i++;
    });
};
let url = "http://api.openweathermap.org/data/2.5/weather";
let appid = "922a8b226c6fc31f1dd318db9c30f91d";
const request = async (lat, lon) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}&lang=fr`);
        const json = await response.json();
        return json;
    } catch (e) {
        console.error("err : " + e);
    }
};

function callRequest(lat, lng) {
    request(lat, lng).then((result) => {
        let e = new L.Marker([lat, lng], {
            icon: icon,
            /* draggable: true */
        }).addTo(macarte).bindPopup(result.weather[0].description);
    });
};
window.onload = function () {
    initMap();
};