import axios from "axios";


//https://api.mapbox.com/directions/v5/mapbox/driving/-99.2199154,19.4578668;-99.262223,19.466468?alternatives=false&geometries=geojson&language=es&overview=simplified&steps=false&access_token=pk.eyJ1Ijoia2xlcml0aCIsImEiOiJja3hramV2OWIwbjEwMzFwYzJlZWl6N2g5In0.iKXPpYvo7UPRiiZ-x_lCrw
const directionsAPI = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params:{
    alternatives:false,
    geometries:'geojson',
    overview:'simplified',
    steps:false,
    access_token:'pk.eyJ1IjoidG9ub3ZhcmVsYSIsImEiOiJjazdhdTlqczUxN3VnM2VwNTFuZTV0cWp6In0.454u4lgDsq-FdCfpv5AmnQ'
    }
});

export default directionsAPI;