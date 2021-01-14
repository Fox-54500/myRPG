import { createStore } from 'vuex'
import Role from '../origin/Role'
import { Ability } from "../const/PlayerInfo";

import Bagage from './modules/Bagage'

const store = createStore({
  state() {
    return {
      itemList: [],
      player: null,
    }
  },
  mutations: {
    createPlayer(state, role) {
      state.player = new Role(role)
    },
    addPoint(state, {ability, point}) {
      console.log('---------- index.js.addPoint()  line:19()  point=', point);
      Ability.forEach(item => {
        state.player.ability[item[0]] += ability[item[0]]
      })
      state.player.point = point
    },
    getItemList(state, list) {
      state.itemList = list
    },
  },
  modules: {
    Bagage
  }
})

export default store