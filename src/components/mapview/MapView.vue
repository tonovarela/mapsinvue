
<template>
  <div
    v-if="!isUserlocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <h3>Espere por favor</h3>
      <span>Localizando ....</span>
    </div>
  </div>
  <div
    v-show="isUserlocationReady"
    class="map-container"
    ref="mapElement"
  ></div>
</template>
<script  lang="ts">
import { usePlaceStore } from "@/composables/usePlacesStore";
import { defineComponent, onMounted, ref, watch } from "vue";
import Mapboxgl from "mapbox-gl";
export default defineComponent({
  name: "MapView",
  setup() {
    const mapElement = ref<HTMLDivElement>();

    const initMap = async () => {
      if (!mapElement.value) return;
      if (!userLocation) return;
      await Promise.resolve();
       const map =new Mapboxgl.Map({        
        container: mapElement.value!, // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });

       const myLocationPopUp = new Mapboxgl.Popup({offset:[0,-5]})
       .setLngLat(userLocation.value!)
       .setHTML("<h1>Aqui estoy</h1>")
       
       

      const mylocationMarker = new Mapboxgl.Marker()
      .setLngLat(userLocation.value!)
      .setPopup(myLocationPopUp);
  
      mylocationMarker.addTo(map);

    };
    const { userLocation, isUserlocationReady } = usePlaceStore();

    onMounted(() => {
      if (isUserlocationReady.value) {
        initMap();
        return;
      }
    });
    watch(isUserlocationReady, () => {
      if (isUserlocationReady.value) {
        initMap();
        return;
      }
    });
    return {
      isUserlocationReady,
      mapElement,
    };
  },
});
</script>

<style scoped>
.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.loading-map {
  top: 0px;
  color: white;
  left: 0px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>