<template>
  <div class="home">
    
<MapView></MapView>    
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { usePlaceStore } from '../composables/usePlacesStore';
import MapView from '@/components/mapview/MapView.vue';




export default defineComponent({
  name: 'HomeView',  
  components:{MapView},
    
  setup(){
     usePlaceStore();
  }

},

);
</script>
