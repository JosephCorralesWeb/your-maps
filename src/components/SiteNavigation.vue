<template>
  <div>
    <nav
      id="main-nav"
      :class="{ 'closed' : !navExpanded, 'open':navExpanded }">
      <div>
        <div class="nav-btn-container">
          <button
            class="main-nav-btn btn-flat"
            v-show="displayingMenuComponent"
            @click.stop="displayingMenuComponent = false">
            <i class="material-icons">close</i>
          </button>
          <div
            class="nav-btn-container waves-effect waves-light"
            @click="displayingMenuComponent = 'newLocation'">
            <button
              class="main-nav-btn btn-flat"
              :class="{ 'hidden' : navExpanded && displayingMenuComponent && displayingMenuComponent !== 'mapCreation'}"
              v-show="!displayingMenuComponent"
              @click="navExpanded = true">
              <i class="material-icons">add_location</i>
            </button>
            <h5
              class="nav-item-label"
              :class="{ 'hidden' : !navExpanded || displayingMenuComponent }">Add a Location</h5>
          </div>
        </div>
      </div>
      <div class="nav-btns-bottom">
        <div
          class="nav-btn-container waves-effect waves-light"
          @click="displayingMenuComponent = 'mapCreation'">
          <button
            class="main-nav-btn btn-flat"
            :class="{ 'hidden' : navExpanded && displayingMenuComponent && displayingMenuComponent !== 'mapCreation'}"
            v-show="!displayingMenuComponent"
            @click="navExpanded = true">
            <i class="material-icons">add</i>
          </button>
          <h5
            class="nav-item-label"
            :class="{ 'hidden' : !navExpanded || displayingMenuComponent }">Create A Map</h5>
        </div>
        <div
          class="nav-btn-container waves-effect waves-light"
          @click="displayingMenuComponent = 'mapList'">
          <button
            class="main-nav-btn btn-flat"
            :class="{ 'hidden' : navExpanded && displayingMenuComponent && displayingMenuComponent !== 'mapList'}"
            v-show="!displayingMenuComponent"
            @click="navExpanded = true">
            <i class="material-icons">sort</i>
          </button>
          <h5
            class="nav-item-label"
            :class="{ 'hidden' : !navExpanded || displayingMenuComponent }">Map List</h5>
        </div>
        <div class="nav-btn-container">
          <button
            class="main-nav-btn btn-flat waves-effect waves-light"
            @click="toggleNavDisplay()">
            <i
              class="material-icons"
              :class="{ 'rotate' : navExpanded }">
              arrow_forward</i>
          </button>
        </div>
      </div>
      <div id="nav-form-components">
        <NewLocation v-show="displayingMenuComponent === 'newLocation'"/>
        <MapCreation v-show="displayingMenuComponent === 'mapCreation'"/>
        <MapList
          v-show="displayingMenuComponent === 'mapList'"
          @closeMainNav="closeMainNav"/>
      </div>
    </nav>
    <div
      id="slide-overlay"
      v-show="navExpanded"
      @click="closeMainNav"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NewLocation from './SiteNavigation/NewLocation'
import MapCreation from './SiteNavigation/MapCreation'
import MapList from './SiteNavigation/MapList'

export default {
  name: 'SiteNavigation',
  data () {
    return {
      navExpanded: false,
      displayingMenuComponent: false
    }
  },
  methods: {
    toggleNavDisplay () {
      this.navExpanded = !this.navExpanded
      if (this.displayingMenuComponent) this.displayingMenuComponent = false
    },
    closeMainNav () {
      this.navExpanded = false
      if (this.displayingMenuComponent) this.displayingMenuComponent = false
    }
  },
  computed: {
    ...mapState({
      maps: state => state.Maps.maps
    })
  },
  components: {
    NewLocation,
    MapCreation,
    MapList
  }
}
</script>

<style>
  #main-nav {
    display: flex;
    align-content: center;
    flex-direction: column;
    position: absolute;
    width: 65px;
    height: 100vh;
    z-index: 2;
    background-color: #fff;
    color: #000;
    -webkit-transition: width .3s;
    -moz-transition: width .3s;
    -ms-transition: width .3s;
    -o-transition: width .3s;
    transition: width .3s;
  }
  #main-nav.closed {
    width: 65px;
  }
  #main-nav.open {
    width: 375px;
  }
  .nav-btn-container {
    display: flex;
    position: relative;
    align-items: center;
    color: #000;
  }
  .map-list-item a, .main-nav-btn i {
    color: #000;
    -webkit-transition: color .3s;
    -moz-transition: color .3s;
    -ms-transition: color .3s;
    -o-transition: color .3s;
    transition: color .3s;
  }
  .nav-btn-container:hover, .nav-btn-container:hover i, .map-list-item:hover a {
    color: #0bf;
  }
  .main-nav-btn {
    width: 65px;
    height: 65px;
  }
  .nav-item-label {
    left: 65px;
    top: 6px;
    display: inline-block;
    padding-left: 1.5rem;
    transition-delay: .3s;
    -webkit-transition: opacity .3s;
    -moz-transition: opacity .3s;
    -ms-transition: opacity .3s;
    -o-transition: opacity .3s;
    transition: opacity .3s;
  }
  .nav-btns-bottom {
    position: absolute;
    bottom: 0;
  }
  /* Positioning of child components */
  #nav-form-components {
    position: absolute;
    top: 2px;
    left: 0;
    width: calc(100% - (65px + 3.5rem));
    padding-top: 4px;
    margin-left: calc(65px + 1.5rem);
  }
  #slide-overlay {
    position: absolute;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100vh;
    z-index: 1;
  }
  .hidden {
    display: none;
  }
  .rotate {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    transform: rotate(180deg);
  }
</style>
