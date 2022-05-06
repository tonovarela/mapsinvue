import { MutationTree } from 'vuex';
import { MapState } from './state';
import Mapboxgl from 'mapbox-gl';
import { Feature } from '@/interfaces/places';


const mutation: MutationTree<MapState> = {
    setMap(state, map: Mapboxgl.Map) {
        state.map = map;
    },
    setPlaceMarkers(state, places: Feature[]) {
        if (!state.map) return;

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

        if (state.map.getLayer('RouteString')){
            state.map.removeLayer('RouteString');
            state.map.removeSource('RouteString');
            state.distance =undefined;
            state.duration=undefined;
        }
    },
    setDistanceDuration(state,{distance,duration}:{distance:number,duration:number}){
        let kms= distance/1000;
        kms= Math.round(kms*100);
        kms /=100;
        state.distance=kms;
        state.duration= Math.floor(duration /60);        

    },
    setRoutePolylines(state, coords: number[][]) {
        const start = coords[0];
        //const end = coords[coords.length - 1]
        
        //Definir los bounces
        const bounds = new Mapboxgl.LngLatBounds(
            [start[0], start[1]],
            [start[0], start[1]],
        );
        //Agregamos cada punto al bounds
        for (const coord of coords) {
            const newCoord: [number, number] = [coord[0], coord[1]];
            bounds.extend(newCoord);
        }
        state.map?.fitBounds(bounds, {
            padding: 200,
        });
        

        const sourceData: Mapboxgl.AnySourceData = {
            type: 'geojson',

            data: {
                type: "FeatureCollection",
                features: [
                    {
                        type: "Feature",
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: coords
                        }
                    }
                ]
            }

        };

        if (state.map?.getLayer('RouteString')){
            state.map.removeLayer('RouteString');
            state.map.removeSource('RouteString');
        }
        
        state.map?.addSource('RouteString',sourceData);
        state.map?.addLayer({
            id:'RouteString',
            type:'line',
            source:'RouteString',
            layout:{
                'line-cap':'round',
                'line-join':'round',            
            },
            paint:{
                'line-color':'black',
                'line-width':3
            }
        });

    }

}


export default mutation;