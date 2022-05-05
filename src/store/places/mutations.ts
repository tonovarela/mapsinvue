import { Feature } from '@/interfaces/places';
import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat(  state: PlacesState,coords:{lng:number,lat:number} ) {
        state.userLocation=[coords.lng,coords.lat];
        state.isLoading=false;
    },
    setIsLoadingPlaces(state){
        state.isLoadingPlaces=true;
    }
    ,
    setPlaces(state,places:Feature[]){
     state.places = places;
     state.isLoadingPlaces=false
    }
}


export default mutation;