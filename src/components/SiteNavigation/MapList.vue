<template>
  <div>
    <ul>
      <li
        class="map-list-item"
        v-for="(map, index) in maps"
        :key="index"
        @click="currentlySelectedMap(map.id)
                $emit('closeMainNav')">
        <a href="javascript:void(0)">
          <h5>{{ map.name }}</h5>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MapList',
  methods: {
    currentlySelectedMap (id) {
      this.$store.commit('currentlySelectedMap', { id })
    }
  },
  computed: {
    ...mapState({
      maps: state => state.Maps.maps
    })
  }
}
</script>

<style scoped>
  li {
    width: 100%;
  }
  a:hover {
    background-color: transparent;
  }
</style>
