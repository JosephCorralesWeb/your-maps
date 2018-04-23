<template>
  <div>
    <gmap-map
      ref="map"
      class="map"
      :center="map.center"
      :zoom="map.zoom">
      <gmap-marker
        v-for="(marker, index) in map.markers"
        :key="index"
        :position="marker.position"
        :z-index="index"
        :icon="marker.icon"
        :label="marker.label"
        :draggable="true"
        @click="$refs.map.panTo(marker.position)"/>
    </gmap-map>
  </div>
</template>
<script>
export default {
  name: 'Map',
  data () {
    return {
      mapSettings: {
        defaultIconSettings: {},
        defaultMapOptions: {}
      }
    }
  },
  computed: {
    map () {
      return this.$store.getters.currentlySelectedMap
    }
  }
}
</script>

<style scoped>
  .map {
    height: 100vh;
    width: calc(100vw - 65px);
    margin-left: 65px;
    background: #000;
  }
</style>
