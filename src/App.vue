<template>
  <div id="app">
    <SiteNavigation/>
    <Map/>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Map from './components/Map'
import SiteNavigation from './components/SiteNavigation'

export default {
  name: 'App',
  computed: {
    ...mapState({
      maps: state => state.Maps.maps
    })
  },
  components: {
    Map,
    SiteNavigation
  },
  beforeCreate () {
    this.$store.dispatch('fetchIconMap')
  },
  created () {
    this.map = this.$store.getters.currentlySelectedMap
  }
}
</script>
<style>
  body {
    margin: 0;
  }
  #app {
    display: flex;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ul {
    list-style-type: none;
  }
  nav a {
    color: #000;
  }
</style>
