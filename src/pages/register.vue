<template>
  <div class="register">
    <div class="register-header">创建你的角色</div>
    <div>
      <input type="text" v-model="name" maxlength="8">
    </div>
    <div>
      性别：
      <input type="radio" :value="1" v-model="sexId">男
      <input type="radio" :value="2" v-model="sexId">女
    </div>
    <div>
      力量：{{strength}}
      <button @click="add('strength')" :disabled="point<=0">+</button>
      <button @click="minus('strength')" :disabled="strength<=basePoint">-</button>
    </div>
    <div>
      敏捷：{{agility}}
      <button @click="add('agility')" :disabled="point<=0">+</button>
      <button @click="minus('agility')" :disabled="agility<=basePoint">-</button>
    </div>
    <div>
      智力：{{intelligence}}
      <button @click="add('intelligence')" :disabled="point<=0">+</button>
      <button @click="minus('intelligence')" :disabled="intelligence<=basePoint">-</button>
    </div>
    <div>
      幸运：{{lucky}}
      <button @click="add('lucky')" :disabled="point<=0">+</button>
      <button @click="minus('lucky')" :disabled="lucky<=basePoint">-</button>
    </div>
    <div>
      可用点数：{{point}}
    </div>
    <button @click="createRole">创建角色</button>
  </div>
</template>

<script>
import { save } from '../origin/Save&Load'

export default {
  name: "register",
  data() {
    return {
      name: '',
      sexId: 1,
      strength: 4,
      agility: 4,
      intelligence: 4,
      lucky: 4,
      point: 4,
      maxPoint: 4,
      basePoint: 4,
    }
  },
  watch: {},
  methods: {
    add(ablity) {
      this[ablity]++
      this.point--
    },
    minus(ability) {
      this[ability]--
      this.point++
    },
    createRole() {
      if (this.point > 0) {
        window.alert('可用点数未使用完')
        return
      }
      if (this.name === '') {
        window.alert('你不要名字的吗')
        return
      }
      this.createRoleHandle()
      this.startGame()
    },
    startGame() {
      this.$router.push({
        name: 'player'
      })
    },
    createRoleHandle() {
      const role = {
        name: this.name,
        sexId: this.sexId,
        strength: this.strength,
        agility: this.agility,
        intelligence: this.intelligence,
        lucky: this.lucky,
        point: 0
      }
      this.$store.commit('createPlayer', role)
      save(role)
    }
  },
  created() {
    if (this.$store.state.player) {
      this.startGame()
    }
  },
}
</script>

<style lang="scss" scoped>
.register {
  &-header {
  }
}
</style>
