// open–closed principle
// Принцип открытости/закрытости

// Программные сущности должны быть открыты для расширения, но закрыты для изменения. 
// Это означает, что изменение поведения сущности должно происходить без изменения самой сущности.

interface Attacker {
  attack: () => void;
}
class Weapon implements Attacker {
  damage: number; // 0 - 100;
  range: number; // 0 - 100;

  constructor( damage: number, range: number) {
    this.damage = damage;
    this.range = range;
  }

  attack() {}
}

class Sword extends Weapon {
  attack() {
    console.log('Удар мечом с уроном ' + this.damage)
  }
}

class Crossbow extends Weapon {
  attack() {
    console.log('Выстрел из арбалета с уроном ' + this.damage)
  }
}

class Knife extends Weapon {
  attack() {
    console.log('Удар ножом с уроном ' + this.damage)
  }
}

class Character {
  name: string;
  weapon: Weapon;

  constructor(name: string, weapon: Weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  changeWeapon(newWeapon: Weapon) {
    this.weapon = newWeapon;
  }

  attack() {
    this.weapon.attack();
  }
}

const sword = new Sword(15, 2);
const character = new Character('Warrior', sword);
character.attack()

const crossbow = new Crossbow(40, 100);
character.changeWeapon(crossbow);
character.attack()


// 1) Нет необходимости в регрессии
// 2) Меньше вероятность ошибок
