<template>
  <div>
    <h5>Create New Map</h5>
    <div>
      <div class="input-field">
        <input
          type="text"
          class="icon-suffix validate"
          placeholder="Name"
          v-model="newMapName">
        <button
          class="btn-flat suffix white-text"
          :class="{ 'disabled' : !newMapName }"
          @click="createNewMap()">
          <i class="material-icons">send</i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapCreation',
  data () {
    return {
      newMapName: ''
    }
  },
  methods: {
    createNewMap (name) {
      if (this.newMapName) {
        this.$store.commit('createMap', this.newMapName)
        this.newMapName = ''
      }
    }
  }
}
</script>

<style scoped>
  .icon-suffix {
    width: calc(100% - 3rem) ;
    margin-right: 3rem;
  }
  .suffix {
    position: absolute;
    top: .5rem;
    right: 0;
    width: 3rem;
    font-size: 2rem;
    text-align: right;
    -webkit-transition: color .2s;
    transition: color .2s;
  }
</style>
