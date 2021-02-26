<template>
  <div class="adventure">
    <button class="adventure-btn" @click="startAdventure" :disabled="!battle.isOver">开始冒险</button>

    <div class="adventure-header">
      <span v-if="battle.isOver&&battle.round">冒险结束</span>
      <span v-else-if="battle.round">当前回合：{{battle.round}}</span>
      <span v-else>请开始冒险</span>
    </div>

    <div class="adventure-main">
      <div class="adventure-main-player">
        <div class="field-value">{{player.name}}</div>
        <div class="field-value">血量：{{player.state.hp}}</div>
        <div class="field-value">精力：{{player.state.mp}}</div>
        <div
          class="role player"
          :class="{
            attack: battle.player.isAttacking,
            isAttacked: battle.player.isAttacked
          }"
          :style="{transition: `all ${battle.animationSpeed}ms ease-out 0s`}"
        >
          <div class="status-box">
            <template v-for="item in player.battleMessage">
              <div :class="[item.type]">{{item.content}}</div>
            </template>
          </div>
        </div>
      </div>
      <div class="adventure-main-enemy">
        <div class="field-value">{{enemy.name}}</div>
        <div class="field-value">血量：{{enemy.state.hp}}</div>
        <div class="field-value">精力：{{enemy.state.mp}}</div>
        <div
          class="role enemy"
          :class="{
            attack: battle.enemy.isAttacking,
            isAttacked: battle.enemy.isAttacked
          }"
          :style="`transition: all ${battle.animationSpeed}ms ease-out 0s`"
        >
          <div class="status-box">
            <template v-for="item in enemy.battleMessage">
              <div :class="[item.type]">{{item.content}}</div>
            </template>
          </div>
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
        sexId: 1,
        level: 1,
        experience: 20,
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
$attackDistance: 100px;
$attackedDistance: 10px;

.adventure {
  &-main {
    display: flex;

    &-player {
      margin-right: $attackDistance;
    }

    &-player, &-enemy {
      .field-value {
        font-size: 14px;
        color: #787878;
      }

      .role {
        position: relative;
        margin-top: 50px;
        width: 80px;
        height: 100px;
        background: darkgrey;

        &.enemy.attack {
          transform: translateX(-$attackDistance);
        }

        &.player.attack {
          transform: translateX($attackDistance);
        }

        &.enemy.isAttacked {
          transform: translateX($attackedDistance);
        }

        &.player.isAttacked {
          transform: translateX(-$attackedDistance);
        }

        > .status-box {
          position: absolute;
          top: -50px;
          left: 50%;
          transform: translateX(-50%);
          white-space: nowrap;

          > .hp {
            color: red;
          }

          > .mp {
            color: blue;
          }

          > .miss {
            color: purple;
          }

          > .crit {
            color: darkred;
          }
        }
      }
    }
  }

}
</style>
