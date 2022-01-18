const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => {
  const damage = Math.floor(Math.random()* (battleMembers.dragon.strength - 14)) + 15;
  return damage;
}

const damageWarrior = () => {
  const minDamage = battleMembers.warrior.strength;
  const weaponDmg = battleMembers.warrior.weaponDmg;
  const maxDamage = minDamage * weaponDmg;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  return damage;
}

const damageManaMage = () => {
  const minDamage = battleMembers.mage.intelligence;
  const maxDamage = minDamage * 2;
  let damage = 'Não possui mana suficiente';
  let spentMana = 0;
  if (battleMembers.mage.mana >= 15) {
    damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
    spentMana = 15;
  }
  return { damage, spentMana };
}

function warriorTurnFunction(turn) {
  battleMembers.dragon.healthPoints -= turn;
  battleMembers.warrior.damage = turn;
}

function mageTurnFunction (turn) {
  battleMembers.dragon.healthPoints -= turn['damage'];
  battleMembers.mage.damage = turn['damage'];
  battleMembers.mage.mana -= turn['spentMana'];
}

function dragonTurnFunction(turn) {
  battleMembers.warrior.healthPoints -= turn;
  battleMembers.mage.healthPoints -= turn;
  battleMembers.dragon.damage = turn;
}

function showBattleFunction() {
  console.log((battleMembers));
}

const gameActions = {
  // Crie as HOFs neste objeto.
  warriorTurn: warriorTurnFunction,
  mageTurn: mageTurnFunction,
  dragonTurn: dragonTurnFunction,
  showBattle: showBattleFunction,
};
