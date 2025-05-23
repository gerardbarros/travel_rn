mapboxgl.accessToken = mapboxToken //"<%-process.env.MAPBOX_TOKEN -%>";

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: "<% post.geometry.coordinates %>" , // starting position [lng, lat]
    zoom: 9, // starting zoom
    });

new mapboxgl.Marker()
    .setLngLat([-74.5, 40])
    .addTo(map)
