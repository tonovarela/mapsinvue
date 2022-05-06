import { useMapStore, usePlaceStore } from "@/composables";

import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "TripDetails",
  setup() {
    const  { duration,distance} =useMapStore();
    const { places} =usePlaceStore();

    return{
      duration,
      distance,
      hasPlaces: computed(()=>places.value.length>0)
    }


  },
});
