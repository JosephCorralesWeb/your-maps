export default {
  state: {
    markers: [
      {
        mapId: 1234,
        type: 'Restaurant',
        name: 'COCAETA - Not the usual Crêpes',
        position: {
          lat: 45.4449698,
          lng: 12.3219569
        },
        icon: ''
      },
      {
        mapId: 1234,
        type: 'Restaurant',
        name: 'Ai Mercanti',
        position: {
          lat: 45.4350633,
          lng: 12.33502
        },
        icon: ''
      },
      {
        mapId: 1234,
        type: 'Restaurant',
        name: 'Nevodi',
        position: {
          lat: 45.432345,
          lng: 12.353407
        },
        icon: ''
      }
    ]
  },
  getters: {
    markers: (state) => {
      return state.markers
    }
  }
}
