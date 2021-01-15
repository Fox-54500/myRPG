<template>
  <div class="adventure">
    <button class="adventure-btn" @click="startAdventure" :disabled="!battle.isOver">开始冒险</button>

    <div class="adventure-main">
      <div class="adventure-main-player">
        <div class="field-value">主角血量：{{player.state.hp}}</div>
        <div class="field-value">主角精力：{{player.state.mp}}</div>
        <div
          class="role player"
          :class="{attack: battle.playerIsAttacking}"
          :style="{transition: `all ${battle.animationSpeed}ms ease-out 0s`}"
        ></div>
        <div class="status-box">
          <template v-for="item in battle.playerStatusBox">
            <div>{{item}}</div>
          </template>
        </div>
      </div>
      <div class="adventure-main-enemy">
        <div class="field-value">敌人血量：{{enemy.state.hp}}</div>
        <div class="field-value">敌人精力：{{enemy.state.mp}}</div>
        <div
          class="role enemy"
          :class="{attack: battle.enemyIsAttacking}"
          :style="`transition: all ${battle.animationSpeed}ms ease-out 0s`"
        ></div>
        <div class="status-box">
          <template v-for="item in battle.enemyStatusBox">
            <div>{{item}}</div>
          </template>
        </div>
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

    &-player, &-enemy {
      .field-value {
        font-size: 14px;
        color: #787878;
      }

      .role {
        margin-top: 50px;
        width: 80px;
        height: 100px;
        background: darkgrey;

        &.enemy.attack {
          transform: translateX(-100px);
        }

        &.player.attack {
          transform: translateX(100px);
        }
      }
    }
  }

}
</style>
