import uuid from 'uuid/v4'

let svgPath = 'M-30,-1a30,30 0 1,0 60,0a30,30 0 1,0 -60,0'

export default {
  state: {
    maps: [
      {
        id: 'default',
        name: 'Venice',
        center: { lat: 45.436, lng: 12.335 },
        zoom: 14,
        markers: [
          {
            title: 'La Palanca',
            position: { lat: 45.4263401, lng: 12.3284282 },
            icon: {
              path: svgPath,
              fillColor: '#2196f3',
              fillOpacity: 1,
              strokeWeight: 1.5,
              strokeColor: '#fff',
              scale: 0.5
            },
            label: {
              fontFamily: 'Material Icons',
              fontWeight: 'bold',
              fontSize: '21px',
              text: 'local_bar',
              color: '#fff'
            }
          },
          {
            title: 'Bacaro Quebrado',
            position: { lat: 45.4405256, lng: 12.3250464 },
            icon: {
              path: svgPath,
              fillColor: '#009688',
              fillOpacity: 1,
              strokeWeight: 1.5,
              strokeColor: '#fff',
              scale: 0.5
            },
            label: {
              fontFamily: 'Material Icons',
              fontSize: '21px',
              text: 'local_parking',
              color: '#fff'
            }
          },
          {
            title: 'Bacaro Que',
            position: { lat: 45.4454, lng: 12.3220486 },
            icon: {
              path: svgPath,
              fillColor: '#ff9800',
              fillOpacity: 1,
              strokeWeight: 1.5,
              strokeColor: '#fff',
              scale: 0.5
            },
            label: {
              fontFamily: 'Roboto',
              fontWeight: 'bold',
              fontSize: '16px',
              text: 'PR',
              color: '#fff'
            }
          }
        ]
      }
    ],
    currentlySelectedMap: 'default'
  },
  getters: {
    /**
     * Returns the user's requested map object
     * @param state - Object - Vuex state object
     * @returns {map}
     */
    currentlySelectedMap: (state) => {
      return state.maps.find(map => map.id === state.currentlySelectedMap)
    }
  },
  mutations: {
    /**
     * Set which map is currently being viewed by id
     * @param state - Object - Vuex state object
     * @param id - String - Id of the map we are setting to current
     */
    currentlySelectedMap: (state, {id}) => {
      state.currentlySelectedMap = id
    },
    /**
     * Appends a new map to our list of available maps
     * @param state - Object - Vuex state object
     * @param name - String - User-defined name for the map
     */
    createMap (state, name) {
      let maps = state.maps
      maps.push({
        id: uuid(),
        name,
        center: { lat: 0, lng: 0 },
        zoom: 3,
        locations: [],
        styles: []
      })
      state.maps = maps
      console.log(maps)
    },
    /**
     * Appends a new geocoded default marker to the current map with default styling
     * @param state - Object - Vuex state object
     * @param lat - Number - Latitudinal Coordinate for marker
     * @param lng - Number - Longtitudinal Coordinate for marker
     */
    createMarker (state, position) {
      let maps = state.maps
      maps[maps.findIndex(map => map.id === state.currentlySelectedMap)]
        .markers.push({
          title: 'New Marker',
          position: position,
          icon: {
            path: svgPath,
            fillColor: '#009688',
            fillOpacity: 1,
            strokeWeight: 1.5,
            strokeColor: '#fff',
            scale: 0.5
          },
          label: {
            text: 'local_bar',
            fontFamily: 'Material Icons',
            fontSize: '21px',
            color: '#fff'
          }
        })
      state.maps = maps
    }
  }
}
