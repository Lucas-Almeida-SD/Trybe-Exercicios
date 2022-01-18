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
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
  const mana = battleMembers.mage.mana - 15;
  return { damage, mana };
}

console.log(damageManaMage());