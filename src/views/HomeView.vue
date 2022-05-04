<template>
  <div class="home">
    <my-location-btn></my-location-btn>    
    <MapView></MapView>    
    <search-bar></search-bar>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { usePlaceStore } from '../composables/usePlacesStore';
import MapView from '@/components/mapview/MapView.vue';
import MyLocationBtn from '@/components/my-location-btn/MyLocationBtnView.vue';
import SearchBar from '@/components/searchbar/SearchBar.vue';






export default defineComponent({
  name: 'HomeView',  
  components:{MapView,MyLocationBtn,SearchBar},
    
  setup(){
     usePlaceStore();
  }

},

);
</script>
