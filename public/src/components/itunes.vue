<template>
    <div>
        <div>
            <header>Search Artists:
                <form class="blacktext" @submit.prevent="getMusicByArtist()">
                    <input type="text" placeholder="Search Artists" v-model="artist">
                    <button type="submit">Search</button>
                </form>
            </header>
            <div id="songs">
                <div class="card" v-for="result in results">
                    <div class="card-body text-center">
                        <img class="card-img-top img-responsive center-block" :src="result.artworkUrl100"></img>
                        <h4 class="card-title">{{result.trackName}}</h4>
                        <p class="card-text">
                            ${{result.trackPrice}} {{result.artistName}} {{result.collectionName}}
                        </p>
                        <audio class="audio" controls="controls" :src="result.previewUrl"></audio>
                        <button class="btn btn-info" @click="addToMyTunes(result)">Add to Favorites</button>
                    </div>
                </div>
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
                    album: result.collectionName,
                    audio: result.previewUrl
                }
                this.$store.dispatch('addToMyTunes', track)
            },
            getMyTunes() {
                this.$store.dispatch('getMyTunes')
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