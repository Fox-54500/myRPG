import Sex from '../const/Sex'
import Level from '../const/Level'

export default class Role {
  name = ''
  sexId = 1
  level = 1
  state = {
    hp: 20,
    mp: 10,
  }
  ability = {
    maxHp: 20,
    maxMp: 10,
    strength: 4,
    agility: 4,
    intelligence: 4,
    lucky: 4,
  }

  constructor(role) {
    this.ability.strength = role.strength
    this.ability.agility = role.agility
    this.ability.intelligence = role.intelligence
    this.ability.lucky = role.lucky
    this.name = role.name
    this.sexId = role.sexId
  }

  skill = []
  isDead = false

  get sex() {
    return Sex[this.sexId]
  }

  get levelUpExp() {
    return Level[this.level]
  }

  attack(obj) {
    obj.getHurt(this.ability.strength)
  }

  die() {
    this.isDead = true
  }

  getHurt(damage) {
    this.state.hp -= damage
    if (this.state.hp <= 0) {
      this.die()
    }
  }

  use(item) {

  }
}