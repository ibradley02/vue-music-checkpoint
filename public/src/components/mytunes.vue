<template>
  <div>
    <header>Your Playlist</header>
    <div id="songs">
      <div class="card" v-for="tune in myTunes">
        <div class="card-body text-center">
          <img class="card-img-top img-responsive center-block" :src="tune.img"></img>
          <h4 class="card-title">{{tune.title}}</h4>
          <p class="card-text">
            ${{tune.price}} {{tune.artist}} {{tune.album}}
          </p>
          <audio class="audio" controls="controls" :src="tune.audio"></audio>
          <button class="btn btn-danger" @click="removeTrack(tune._id)">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mytunes',
    data() {
      return {}
    },
    mounted() {
      this.$store.dispatch('getMyTunes')
    },
    methods: {
      removeTrack(id) {
        this.$store.dispatch('removeTrack', id)
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