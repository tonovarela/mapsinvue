
<template>
<button v-if="isButtonReady" @click="onMyLocationClicked" class="btn btn-primary">Ir a mi ubicación</button>
</template>

<script lang="ts">
import { useMapStore, usePlaceStore } from '@/composables';
import { defineComponent, computed } from 'vue';
export default  defineComponent({
    name:"MyLocationBtnView",
    setup(){
        const { userLocation,isUserlocationReady }=usePlaceStore();
        const { map ,isMapReady}= useMapStore();

        return{
          isButtonReady:computed(()=>isUserlocationReady.value && isMapReady),
          isUserlocationReady,
          onMyLocationClicked:() => {
             map.value?.flyTo({
               center:userLocation.value,
               zoom:18
             })
          }

          

        }
    }
});
</script>

<style scoped>
button{
  position: fixed;
  z-index: 99;
  top:30px;
  right: 30px;
}
</style>