<template>
  <div class="adventure">
    <button class="adventure-btn" @click="startAdventure">开始冒险</button>
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
      battle: null
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
      this.battle = new Battle([this.player], [this.createEnemy()])
    }
  },
  created() {
  },
}
</script>

<style lang="scss" scoped>
.adventure {
  &-header {
  }
}
</style>
