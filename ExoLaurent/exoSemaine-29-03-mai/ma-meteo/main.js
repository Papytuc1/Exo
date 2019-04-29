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
}
let icon = L.icon({
    iconUrl: "customMarker.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [-3, -76]
})
function initMap() {
    // Créer l'objet "macarte" et l'insèrer dans l'élément HTML qui a l'ID "map"
    macarte = L.map('map').setView([lat, lon], 11);
    // Leaflet ne récupère pas les cartes (tiles) sur un serveur par défaut. Nous devons lui préciser où nous souhaitons les récupérer. Ici, openstreetmap.fr
    L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
        // Il est toujours bien de laisser le lien vers la source des données
        attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
        minZoom: 1,
        maxZoom: 20
    }).addTo(macarte);
    for (marker in markers) {
        let addMarker = L.marker([markers[marker].lat, markers[marker].lon], {
            icon: icon
        }).addTo(macarte);
    };
    macarte.on("click",function(e){
        let newMarker= new L.Marker([e.latlng.lat,e.latlng.lng],{icon:icon}).addTo(macarte);
        console.log(newMarker)
    });
};
window.onload = function () {
    // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
    initMap();
};