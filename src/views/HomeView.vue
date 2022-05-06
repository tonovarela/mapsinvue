<template>
  <div class="home">
    <my-location-btn></my-location-btn>    
    <MapView></MapView>    
    <search-bar></search-bar>
    <trip-details></trip-details>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { usePlaceStore } from '../composables/usePlacesStore';
import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtnView.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';
import TripDetails from '@/components/trip-details/TripDetails.vue';






export default defineComponent({
  name: 'HomeView',  
  components:{MapView,MyLocationBtn,SearchBar,TripDetails},
    
  setup(){
     usePlaceStore();
  }

},

);
</script>
