import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, data){
      console.log(data)
      state.results = data.results
    },
    setMyTunes(state, data){
      state.myTunes = data.results
    }
  },
  actions: {
    getMusicByArtist({commit, dispatch}, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data=>{
        commit('setResults', JSON.parse(data))
      })
    },
    getMyTunes({commit, dispatch}){
      //this should send a get request to your server to return the list of saved tunes
      $.get('http://localhost:9001/api/songs')
        .then(data => {
          commit('setMyTunes', data)
        })
    },
    addToMyTunes({commit, dispatch}, track){
      console.log(track)
      $.post('http://localhost:9001/api/songs', track)
        .then(res => console.log(res))
        .fail(console.error('Oh No!'))
    },
    removeTrack({commit, dispatch}, track){
      //Removes track from the database with delete
    },
    promoteTrack({commit, dispatch}, track){
      //this should increase the position / upvotes and downvotes on the track
    },
    demoteTrack({commit, dispatch}, track){
      //this should decrease the position / upvotes and downvotes on the track
    }

  }
})

export default store
