export default class Battle {
  timer = null
  speed = 1000
  originSpeed = 1000
  queue = []
  // 回合数
  round = 0
  // 游戏仅支持以下速度
  speedRules = [0.5, 1, 2, 5, 10]
  isOver = true

  player = {
    queue: [],
    isAttacking: false,
  }

  enemy = {
    queue: [],
    isAttacking: false,
  }

  get playerWin() {
    return this.enemy.queue.every(enemy => enemy.isDead)
  }

  get enemyWin() {
    return this.player.queue.every(player => player.isDead)
  }

  get animationSpeed() {
    // 动画有来回，实际要除二 0.9/2
    return this.speed * 0.45
  }

  constructor(players, enemys) {
    this.player.queue = players
    this.enemy.queue = enemys
    this.queue = [...players, ...enemys].sort((a, b) => b.speed - a.speed)
  }

  battleStart() {
    this.isOver = false
    this.round = 1
    this.queue.forEach(item => item.resetState(this))

    setTimeout(() => {
      this.handler(0)
    }, this.speed)
  }

  handler(i) {
    const curRole = this.queue[i]
    const target = this.selectTarget(curRole)
    const camp = curRole.isAct ? 'player' : 'enemy'
    this.battleAnimation(camp)
      .then(() => {
        curRole.damage(target)
      })

    this.timer = setTimeout(() => {
      const goOn = this.assessResult()
      if (goOn) {
        // 保证回合执行到最后一条
        if (i < this.queue.length - 1) {
          this.handler(i + 1)
        } else {
          this.round++
          this.handler(0)
        }
      } else {
        this.isOver = true
      }
    }, this.speed)
  }

  selectTarget(role) {
    // 目前仅支持1对1
    return this[role.isAct ? 'enemy' : 'player'].queue[0]
  }

  sortQueue() {
    this.queue = this.queue.sort((a, b) => b.speed - a.speed)
  }

  addSpeed(times) {
    if (!this.speedRules.includes(times)) {
      return
    }
    this.speed = this.originSpeed * times
  }

  resetSpeed() {
    this.addSpeed(1)
  }

  assessResult() {
    if (this.playerWin) {
      this.winHandle()
      return false
    }
    if (this.enemyWin) {
      this.loseHandle()
      return false
    }

    return true
  }

  winHandle() {
    console.log('主角团胜利')
  }

  loseHandle() {
    console.log('主角团失利')
  }

  battleAnimation(camp) {
    this[camp].isAttacking = true

    return new Promise(resolve => {
      setTimeout(() => {
        this[camp].isAttacking = false
        resolve()
      }, this.animationSpeed)
    })
  }
}