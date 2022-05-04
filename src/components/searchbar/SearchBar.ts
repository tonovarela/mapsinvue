import { defineComponent, ref, computed } from "vue";
import SearchResults from "../search-results/SearchResults.vue";
import { usePlaceStore } from '../../composables/usePlacesStore';

export default defineComponent({
  name: "SearchBar",
  components: { SearchResults },
  setup() {
    const debounceTimer = ref();
    const debounceValue = ref("varela");

    const { searchPlacesByTerm } = usePlaceStore();

    return {
      debounceValue,
      searchTerm: computed({
        get() {
          return debounceValue.value;
        },
         set(val: string)  {
          if (debounceTimer.value) clearTimeout(debounceTimer.value);
          debounceTimer.value = setTimeout(() => {            
             searchPlacesByTerm(val);
            debounceValue.value = val;
          }, 2000);
        },
      }),
    };
  },
});
