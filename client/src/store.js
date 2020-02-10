import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    players: [],
    name: null,
  },
  mutations: {
    addPlayer(state, indexedPlayer) {
      Vue.set(state.players, indexedPlayer.index, indexedPlayer.player)
  },
  updateName(state, name){
      state.name = name
    }
  },
  actions: {
    updatePlayersList({ commit }, newPlayers) {
      for (let index = 0; index < newPlayers.length; index++) {
        const currPlayer = newPlayers[index];
        commit('addPlayer', {'index': index, 'player': currPlayer});
      }
  },
  setName({commit}, name) {
      commit('updateName', name)
    }
  }
})
