import { useStore } from "vuex";
import { computed } from "vue";
import { StateInterface } from '../store/index';
import Mapboxgl from 'mapbox-gl';
import { LngLat } from "@/store/map/actions";
export const useMapStore = () => {
  const store = useStore<StateInterface>();

  return {
    map: computed(()=> store.state.maps.map),
    distance: computed(()=> store.state.maps.distance),
    duration: computed(()=> store.state.maps.duration),
    //Getter
    isMapReady: computed(()=> store.getters['maps/isMapReady']),
    //Mutations
    setMap:(map:Mapboxgl.Map)=>store.commit("maps/setMap",map),
    getRouteBetweenPoints:(start:LngLat,end:LngLat)=>store.dispatch("maps/getRouteBetweenPoints",{start,end})
    //Actions
  };
};
