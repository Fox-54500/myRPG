export default {
  state() {
    return {}
  },
  getters: {
    playerBagage: (state, getters, rooState) => {
      const itemList = rooState.itemList
      return rooState.player.bagage.map(item => {
        const i = itemList.find(_i => _i.id === item.id)
        return {
          ...i,
          count: item.count
        }
      })
    }
  },
  mutations: {
    updateBagage(state, {id, count, bagage}) {
      const idx = bagage.findIndex(item => item.id === id)
      if (idx > -1) {
        if (count > 0) {
          bagage[idx].count = count
        } else {
          bagage.splice(idx, 1)
        }
      }
    },
    moneyHandle(state, {id, itemList, bagage}) {
      const item = itemList.find(item => item.id === id)
      const money = bagage.find(item => item.id === 1)
      money.count += item.saleCount
    },
    itemAffect(state, {id, itemList, player}) {
      const item = itemList.find(item => item.id === id)
      for (const affectKey in item.affect) {
        player.ability[affectKey] += item.affect[affectKey]
      }
    }
  },
  actions: {
    saleItemHandle({commit, rootState}, {id, count}) {
      const bagage = rootState.player.bagage
      const itemList = rootState.itemList
      commit('moneyHandle', {id, itemList, bagage})
      commit('updateBagage', {id, count, bagage})
    },
    useItemHandle({commit, rootState}, {id, count}) {
      const player = rootState.player
      const itemList = rootState.itemList
      commit('itemAffect', {id, itemList, player})
      commit('updateBagage', {id, count, bagage: player.bagage})
    },
  },
}