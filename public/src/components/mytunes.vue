<template>
  <div>
    <h1>Favorites Playlist</h1>
    <button @click="getMyTunes">Test</button>
    <div v-for="tune in myTunes">
        <img :src="tune.artworkUrl100">
        <!-- <audio class="audio" controls="controls" :src="tune.previewUrl"></audio> -->
        <h1>{{tune.trackName}} ${{tune.trackPrice}}</h1>
        <h3>{{tune.collectionName}}</h3>
        <h3>{{tune.artistName}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mytunes',
    data() {
      return {}
    },
    methods: {
      getMyTunes() {
                this.$store.dispatch('getMyTunes')
            }
    },
    computed: {
      myTunes() {
        return this.$store.state.myTunes
      }
    }
  }
</script>


<style>
</style>