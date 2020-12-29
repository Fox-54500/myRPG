import { createStore } from 'vuex'
import Role from '../origin/Role'

const store = createStore({
  state() {
    return {
      player: null,
    }
  },
  mutations: {
    createPlayer(state, role) {
      state.player = new Role(role)
    }
  }
})

export default store