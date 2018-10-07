mapboxgl.accessToken = 'pk.eyJ1IjoiaWduYWNpb2FiZSIsImEiOiJsTDV0dWFJIn0.Og513NMky_08_sXUUDsrbA';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/ignacioabe/cjh9cdi311x352sp0f0fc5w6j', // stylesheet location
    center: [38.502, 34.760], // starting position [lng, lat]
    zoom: 4 // starting zoom
});