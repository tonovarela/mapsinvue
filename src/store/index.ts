import { createStore } from 'vuex';

// My custom modules
//import exampleModule from './module-template';
//import { ExampleStateInterface } from './module-template/state';

import { PlacesState } from './places/state';
import PlacesModule from './places/index';

import { MapState } from './map/state';
import MapModule from './map';

export interface StateInterface {  
  places:PlacesState,
  maps:MapState
}

export default createStore<StateInterface>({
  modules: {
    places:PlacesModule,
    maps:MapModule
  }
});
