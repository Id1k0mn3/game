const RANDOM_DAMAGE_MONSTER  = Math.floor(Math.random() * 7)
const RANDOM_DAMAGE_HERO = Math.floor(Math.random() * 20)
const HEAL_HERO = Math.floor(Math.random() * 50)
const game = Vue.createApp({
  data() {
    return {
      healthbarPlayer: 100,
      healthbarMonster: 100,
      dis: false,
      countCLicks: 0,
      battleLog: [],
      endGame: true,
    }
  },
  methods: {
    monsterDamg() {
      this.healthbarPlayer -= RANDOM_DAMAGE_HERO
      this.battleLog.push('Герой получил урона: ' + RANDOM_DAMAGE_HERO)
    },
    countClick() {
      this.countCLicks++
      if(this.countCLicks >= 3) {
        this.countCLicks = 0
        this.dis = false
      }
    },
    attackPlayer() {
      this.healthbarMonster -= RANDOM_DAMAGE_MONSTER
      this.battleLog.push('Монстр получил урона: ' + RANDOM_DAMAGE_MONSTER)
      this.monsterDamg()
      if(this.healthbarPlayer <= 0) {
        this.healthbarPlayer = 0
        alert('win Monster')
      }
      if(this.healthbarMonster <= 0) {
        this.healthbarMonster = 0
        alert('win User')
      }
      this.countClick()
    },
    specialAttackPlayer() {
      this.countClicks = 0
      //this.firstCLick++
      this.healthbarMonster -= RANDOM_DAMAGE_MONSTER * 2
      this.dis = true
      this.battleLog.push('Cупер удар нанес урона: ' + RANDOM_DAMAGE_MONSTER * 2)
      this.monsterDamg()
    },
    healHero() {
      this.monsterDamg()
      if(this.healthbarPlayer <= 100) {
        this.healthbarPlayer += HEAL_HERO
        if(this.healthbarPlayer >= 100) {
          this.healthbarPlayer = 100
        }
        this.battleLog.push('Герой вылечился на: ' + HEAL_HERO)
      }
      this.countClick()
    },
    surrend() {
      this.endGame = !this.endGame
    },
  },
})

game.mount('#game')