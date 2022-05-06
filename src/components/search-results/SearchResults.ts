import { useMapStore, usePlaceStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "SearchResults",
  setup() {

    const { isLoadingPlaces, places, setPlaceMarkers, userLocation } = usePlaceStore()
    const { map, getRouteBetweenPoints } = useMapStore();

    const activePlace = ref('');

    watch(places, (newplaces) => {
      activePlace.value = '';
      setPlaceMarkers(newplaces);
      //console.log("vatle");
    })

    return {
      isLoadingPlaces,
      places,
      activePlace,
      getRoute(place: Feature) {
        if (!userLocation.value) return;
        const [lng, lat] = place.center;
        const [startLng, statLat] = userLocation.value;
        const start: [number, number] = [startLng, statLat];
        const end: [number, number] = [lng, lat];
        getRouteBetweenPoints(start, end);

      },
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
