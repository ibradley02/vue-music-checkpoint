<template>
    <div>
        <div>
            <form @submit.prevent="getMusicByArtist()">
                <input type="text" placeholder="Search Artists" v-model="artist">
                <button type="submit">Search</button>
            </form>
            <div v-for="result in results">
                <img :src="result.artworkUrl100">
                <audio class="audio" controls="controls" :src="result.previewUrl"></audio>
                <button class="btn btn-info" @click="addToMyTunes(result)">Add to Favorites</button>
                <h1>{{result.trackName}} ${{result.trackPrice}}</h1>
                <h3>{{result.collectionName}}</h3>
                <h3>{{result.artistName}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'itunes',
        data() {
            return {
                artist: ''
            }
        },
        methods: {
            getMusicByArtist() {
                this.$store.dispatch('getMusicByArtist', this.artist)
            },
            addToMyTunes(result) {
                var track = {
                    title: result.trackName,
                    artist: result.artistName,
                    img: result.artworkUrl100,
                    price: result.trackPrice,
                    album: result.collectionName
                }
                this.$store.dispatch('addToMyTunes', track)
            }
        },
        computed: {
            results() {
                return this.$store.state.results
            }
        }
    }
</script>


<style>
</style>