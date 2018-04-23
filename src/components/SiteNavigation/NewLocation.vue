<template>
  <div>
    <div class="input-field">
      <input
        type="text"
        class="validate"
        placeholder="Name"
        v-model="newLocation.name"
        minlength="1">
    </div>
    <div class="input-field">
      <input
        type="text"
        class="validate"
        placeholder="Address"
        v-model="newLocation.address"
        minlength="1">
    </div>
    <div>
      <a
        ref="iconListDropdownTrigger"
        class='dropdown-trigger'
        data-target='icons-dropdown'>
        Icon
        <i class="material-icons right">arrow_drop_down</i>
      </a>
      <div
        id='icons-dropdown'
        class="dropdown-content icons">
        <nav class="search white">
          <div class="input-field">
            <input
              id="search"
              type="search">
            <label
              class="label-icon"
              for="search"><i class="material-icons">search</i></label>
            <i class="material-icons close">close</i>
          </div>
        </nav>
        <ul>
          <li
            v-for="(icon, index) in iconMap"
            :key="index"
            @click="iconListDropdownTrigger.close()">
            <i class="material-icons">{{ String.fromCharCode(parseInt(index, 16)) }}</i>
            <p>{{ icon.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <a
        ref="colorPickerDropdownTrigger"
        class='dropdown-trigger'
        data-target='colors-dropdown'>
        Color
        <i class="material-icons right">arrow_drop_down</i>
      </a>
      <!-- Dropdown Structure -->
      <ul
        id='colors-dropdown'
        class='dropdown-content'>
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        <li
          class="d/ivider"
          tabindex="-1"/>
        <li><a href="#!">three</a></li>
        <li><a href="#!"><i class="material-icons">view_module</i>four</a></li>
        <li><a href="#!"><i class="material-icons">cloud</i>five</a></li>
      </ul>
    </div>
    <div>
      <a
        :class="{ 'disabled' : !newLocation.address }"
        @click="createLocation()">
        Create
      </a>
    </div>
  </div>
</template>

<script>
import {loaded} from 'vue2-google-maps'
import M from 'materialize-css'

export default {
  name: 'NewLocation',
  data () {
    return {
      newLocation: {
        name: '',
        address: '',
        color: '',
        icon: ''
      },
      geocoder: null,
      iconListDropdownTrigger: null
    }
  },
  methods: {
    createLocation () {
      if (this.newLocation.address) {
        this.geocoder.geocode({address: this.newLocation.address}, (results, status) => {
          if (status === 'OK') {
            this.$store.commit('createMarker', results[0].geometry.location)
            this.newLocation.name = ''
            this.newLocation.address = ''
            this.newLocation.color = ''
            this.newLocation.icon = ''
          }
        })
        this.clearInputs()
      }
    },
    clearInputs () {
      this.newLocationAddress = ''
    }
  },
  computed: {
    iconMap () {
      return this.$store.getters.iconMap
    }
  },
  mounted () {
    this.iconListDropdownTrigger = M.Dropdown.init(this.$refs.iconListDropdownTrigger, {
      closeOnClick: false,
      constrainWidth: false,
      container: document.getElementById('main-nav'),
      coverTrigger: false
    })
    this.colorPickerDropdownTrigger = M.Dropdown.init(this.$refs.colorPickerDropdownTrigger)
  }
}
// Once map is loaded, create new Geocoder instance
loaded.then(() => {
  this.geocoder = new google.maps.Geocoder() // eslint-disable-line , no-new, no-undef
})
</script>

<style scoped>
  a {
    display: inline-block;
  }

  a i {
    height: inherit;
    line-height: inherit;
  }
  #icons-dropdown {
    left: 0 !important;
  }
  .dropdown-content {
    position: relative;
    width: 375px;
    max-height: 60vh;
    overflow-y: hidden;
  }
  .dropdown-content ul {
    overflow-y: scroll;
    height: calc(60vh - 64px);
    margin-top: 4px;
  }
  .dropdown-content #search {
    display: flex;
    align-content: center;
    position: fixed;
    top: 0;
    left: 3rem;
    right: 3rem;
    height: 64px;
    width: calc(100% - 6rem);
    margin-bottom: 0;
    border-bottom: 0;
    background-color: transparent;
  }
  /*.search {*/
    /*margin-top: 4px;*/
  /*}*/
  .search i {
    color: #999;
  }
  .dropdown-content i {
    margin-top: 5px;
  }
  .dropdown-content i {
    margin-top: 4px;
  }
  .dropdown-content li {
    clear: none;
    height: 110px;
    width: 125px;
    text-align: center;
  }
  .dropdown-content li p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
