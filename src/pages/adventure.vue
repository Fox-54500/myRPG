<template>
  <div class="adventure">
    <button class="adventure-btn" @click="startAdventure" :disabled="!battle.isOver">开始冒险</button>

    <div class="adventure-main">
      <div class="adventure-main-player">
        <div>主角血量：{{player.state.hp}}</div>
        <div>主角精力：{{player.state.mp}}</div>
      </div>
      <div class="adventure-main-enemy">
        <div>敌人血量：{{enemy.state.hp}}</div>
        <div>敌人精力：{{enemy.state.mp}}</div>
      </div>
    </div>

  </div>
</template>

<script>
import Battle from '../origin/Battle'
import Role from '../origin/Role'
import { mapState } from 'vuex'

export default {
  name: "adventure",
  data() {
    return {
      battle: null,
      enemy: null,
    }
  },
  computed: {
    ...mapState(['player'])
  },
  watch: {},
  methods: {
    createEnemy() {
      return new Role({
        strength: 5,
        agility: 5,
        intelligence: 5,
        lucky: 5,
        name: '无名小卒',
        sexId: 1,
      }, false)
    },
    startAdventure() {
      this.battle.battleStart()
    }
  },
  created() {
    console.log(1)
    this.enemy = this.createEnemy()
    this.battle = new Battle([this.player], [this.enemy])
  },
}
</script>

<style lang="scss" scoped>
.adventure {
  &-main {
    display: flex;

    &-player {
      margin-right: 100px;
    }

    &-enemy {

    }
  }

}
</style>
