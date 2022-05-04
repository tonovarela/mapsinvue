import { computed, onMounted } from "vue";
import { useStore } from "vuex"
import { StateInterface } from '../store/index';

export const usePlaceStore =()=>{


    const store =useStore<StateInterface>();
    onMounted(()=>{
        if (!store.getters['places/isUserReady']){
         store.dispatch("places/getInitialLocation");
        }

    })

    return   {
        //State
        isLoading:computed(()=>store.state.places.isLoading),
        userLocation:computed(()=>store.state.places.userLocation),
        isUserlocationReady:computed<boolean>(()=>store.getters['places/isUserReady']),
        searchPlacesByTerm:(term:string)=>store.dispatch('places/seachPlacesByTerm',term)
        //Getters


        
    }
}
