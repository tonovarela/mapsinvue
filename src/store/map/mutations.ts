import { MutationTree } from 'vuex';
import { MapState } from './state';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<MapState> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map;
    },
    setPlaceMarkers(state, places: Feature[]) {
        if (!state.map)return;
        
        state.markers.forEach(m => m.remove());
        state.markers = [];

        for (const place of places) {
            const [lng, lat] = place.center;
            const popUp = new Mapboxgl.Popup({ offset: [0, -5] })
                .setLngLat([lng, lat])
                .setHTML(`<h1>${place.text}</h1>`)


            const customMarker = new Mapboxgl.Marker()
                .setLngLat([lng, lat])
                .setPopup(popUp)
                .addTo(state.map)
                state.markers.push(customMarker)

        }
    }

}


export default mutation;