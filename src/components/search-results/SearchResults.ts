import { useMapStore, usePlaceStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SearchResults",
  setup() {

    const { isLoadingPlaces, places,setPlaceMarkers } = usePlaceStore()
    const { map } = useMapStore();

    const activePlace = ref('');

    watch(places,(newplaces)=>{
      activePlace.value='';
      setPlaceMarkers(newplaces);
     //console.log("vatle");
    })

    return {
      isLoadingPlaces,
      places,
      activePlace,
      onPlaceClicked: (place: Feature) => {
        const [lng, lat] = place.center;
        map.value?.flyTo({
          zoom: 14,
          center: [lng, lat]
        }),
          activePlace.value = place.id
      }
    }
  },
});
