import { createStore } from 'vuex'
import Role from '../origin/Role'
import {Ability} from "../const/PlayerInfo";

const store = createStore({
  state() {
    return {
      player: null,
    }
  },
  mutations: {
    createPlayer(state, role) {
      state.player = new Role(role)
    },
    addPoint(state, ability) {
      Ability.forEach(item => {
        state.player[item[0]] += ability[item[0]]
      })
    }
  }
})

export default store