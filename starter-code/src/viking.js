// Soldier
function Soldier(healthArg, strengthArg) {

  this.health = healthArg
  this.strength = strengthArg;
  this.attack = function () {
    return this.strength
  }

  this.receiveDamage = function (damage) {
    this.health = this.health - damage;
  }

}

// Viking

Viking.prototype = Object.create(Soldier.prototype)

function Viking(name, health, strength) {
  Soldier.call(this, health, strength)
  this.name = name;
  this.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return this.name + " has received " + damage + " points of damage"
    } else this.name + " has died in act of combat"
  }
}

Viking.prototype.battleCry = function () {
  return "Odin Owns You All!"
}

// Saxon
function Saxon(health, strength) {
  Soldier.call(this, health, strength)
  this.receiveDamage = function (damage) {
    this.health -= damage;
    if (this.health > 0) {
      return "A Saxon has received " + damage + " points of damage"
    } else "A Saxon has died in combat"
  }
}

// War
function War() {

  this.vikingArmy = [];
  this.saxonArmy = [];
  this.addViking = function (Viking) {
    this.vikingArmy.push(viking);
  };
  this.addSaxon = function (Saxon) {
    this.saxonArmy.push(Saxon)
  }

  this.showStatus = function () {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!"
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day..."
    } else if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
      return "Vikings and Saxons are still in the thick of battle"
    }
  }

}

console.log([].length)
