import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoidG9ub3ZhcmVsYSIsImEiOiJjazdhdTlqczUxN3VnM2VwNTFuZTV0cWp6In0.454u4lgDsq-FdCfpv5AmnQ';

if (!navigator.geolocation){
    alert("El navegador no soporta la Geolocalización ")
    throw new Error("El navegador no soporta la Geolocalización");
}

createApp(App)
.use(store)
.use(router)
.mount('#app')
