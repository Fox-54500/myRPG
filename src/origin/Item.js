import ItemConst from '../const/ItemConst'

export class Item {
  name = ''
  desc = ''
  classId = 1
  saleCount = 0

  affect = {
    maxHp: 0,
    maxMp: 0,
    strength: 0,
    agility: 0,
    intelligence: 0,
    lucky: 0,
  }

  equipAttr = {
    attack: 0,
    defense: 0
  }

  get className() {
    return ItemConst[this.classId]
  }
}