<template>
  <div>
    <nav>
      <router-link to="/player">状态</router-link>
      <router-link to="/bagage">背包</router-link>
      <router-link to="/adventure">冒险</router-link>
      <router-link to="/illustrate">图鉴</router-link>
      <a href="#" @click="save()">保存</a>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { save } from '../origin/Save&Load'

export default {
  name: "NavHeader",
  data() {
    return {}
  },
  components: {},
  watch: {},
  methods: {
    save() {
      const player = this.$store.state.player
      save({
        name: player.name,
        sexId: player.sexId,
        strength: player.ability.strength,
        agility: player.ability.agility,
        intelligence: player.ability.intelligence,
        lucky: player.ability.lucky,
      })
    }
  },
  created() {
    if (this.$store.state.player === null) {
      this.$router.replace({
        name: 'register'
      })
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
