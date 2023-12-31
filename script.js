// Copyright (C) 2007 GNU


const monsterDiv = document.getElementById("monster");
const playerDiv = document.getElementById("player");

//Monster constructor
class Monster {
  constructor(monsterStats) {
    this.name = monsterStats.name || "No name";
    this.attack = monsterStats.attack || 1;
    this.defense = monsterStats.defense || 1;
    this.health = monsterStats.health || 10;
    this.maxHealth = this.health;
  }
}

const monsterList = [];//array to store multiple monsters;
let currentMonsterIndex = 0;//store current monster index we are fighting;

//create monster data
const monster_1_data = {name:"Bug", attack:1, defense:1, health: 5};
const monster_2_data = {name:"Keylogger", attack:2, defense:2, health: 10};
const monster_3_data = {name:"Trojan", attack:5, defense:3, health: 25};
const monster_4_data = {name:"Ransomware", attack:7, defense:5, health: 40};
const monster_5_data = {name:"Script Kiddie", attack:10, defense:7, health: 60};
const monster_6_data = {name:"Green Hat", attack:13, defense:10, health: 100};
const monster_7_data = {name:"Gray Hat", attack:15, defense:13, health: 150};
const monster_8_data = {name:"Hacktivist", attack:17, defense:15, health: 200};
const monster_9_data = {name:"White Hat", attack:20, defense:17, health: 220};
const monster_10_data = {name:"Cryptojacker", attack:23, defense:20, health: 245};
const monster_11_data = {name:"Blue Hat", attack:25, defense:23, health: 270};
const monster_12_data = {name:"Black Hat", attack:27, defense:25, health: 300};
const monster_13_data = {name:"Red Hat", attack:30, defense:27, health: 320};
const monster_14_data = {name:"Advanced Bug", attack:50, defense:45, health: 700};
const monster_15_data = {name:"Advanced Keylogger", attack:56, defense:50, health: 745};
const monster_16_data = {name:"Advanced Trojan", attack:62, defense:56, health: 800};
const monster_17_data = {name:"Advanced Ransomware", attack:74, defense:55, health: 845};
const monster_18_data = {name:"Advanced Script Kiddie", attack:86, defense:60, health: 900};
const monster_19_data = {name:"Advanced Green Hat", attack:98, defense:65, health: 945};
const monster_20_data = {name:"Advanced Gray Hat", attack:110, defense:70, health: 1000};
const monster_21_data = {name:"Advanced Hacktivist", attack:122, defense:75, health: 1450};
const monster_22_data = {name:"Advanced White Hat", attack:134, defense:80, health: 2000};
const monster_23_data = {name:"Advanced Cryptojacker", attack:146, defense:85, health: 2450};
const monster_24_data = {name:"Advanced Blue Hat", attack:158, defense:90, health: 3000};
const monster_25_data = {name:"Advanced Black Hat", attack:170, defense:95, health: 3450};
const monster_26_data = {name:"Advanced Red Hat", attack:182, defense:100, health: 4000};
const monster_27_data = {name:"Hyper Bug", attack:250, defense:180, health: 5000};
const monster_28_data = {name:"Hyper Keylogger", attack:286, defense:190, health: 5750};
const monster_29_data = {name:"Hyper Trojan", attack:322, defense:200, health: 6500};
const monster_30_data = {name:"Hyper Ransomware", attack:358, defense:210, health: 7250};
const monster_31_data = {name:"Hyper Script Kiddie", attack:394, defense:220, health: 8000};
const monster_32_data = {name:"Hyper Green Hat", attack:430, defense:230, health: 8725};
const monster_33_data = {name:"Hyper Gray Hat", attack:466, defense:240, health: 9500};
const monster_34_data = {name:"Hyper Hacktivist", attack:502, defense:250, health: 12500};
const monster_35_data = {name:"Hyper White Hat", attack:538, defense:260, health: 20000};
const monster_36_data = {name:"Hyper Cryptojacker", attack:574, defense:270, health: 27500};
const monster_37_data = {name:"Hyper Blue Hat", attack:610, defense:280, health: 35000};
const monster_38_data = {name:"Hyper Black Hat", attack:646, defense:290, health: 42500};
const monster_39_data = {name:"Hyper Red Hat", attack:682, defense:300, health: 50000};
const monster_40_data = {name:"Elite Hat", attack:800, defense:500, health: 75000};
const monster_41_data = {name:"BotNet", attack:950, defense:575, health: 100000};
const monster_42_data = {name:"OmegaNet", attack:1875, defense:1125, health: 200000};
//create monster const
const monster_1 = new Monster(monster_1_data);
const monster_2 = new Monster(monster_2_data);
const monster_3 = new Monster(monster_3_data);
const monster_4 = new Monster(monster_4_data);
const monster_5 = new Monster(monster_5_data);
const monster_6 = new Monster(monster_6_data);
const monster_7 = new Monster(monster_7_data);
const monster_8 = new Monster(monster_8_data);
const monster_9 = new Monster(monster_9_data);
const monster_10 = new Monster(monster_10_data);
const monster_11 = new Monster(monster_11_data);
const monster_12 = new Monster(monster_12_data);
const monster_13 = new Monster(monster_13_data);
const monster_14 = new Monster(monster_14_data);
const monster_15 = new Monster(monster_15_data);
const monster_16 = new Monster(monster_16_data);
const monster_17 = new Monster(monster_17_data);
const monster_18 = new Monster(monster_18_data);
const monster_19 = new Monster(monster_19_data);
const monster_20 = new Monster(monster_20_data);
const monster_21 = new Monster(monster_21_data);
const monster_22 = new Monster(monster_22_data);
const monster_23 = new Monster(monster_23_data);
const monster_24 = new Monster(monster_24_data);
const monster_25 = new Monster(monster_25_data);
const monster_26 = new Monster(monster_26_data);
const monster_27 = new Monster(monster_27_data);
const monster_28 = new Monster(monster_28_data);
const monster_29 = new Monster(monster_29_data);
const monster_30 = new Monster(monster_30_data);
const monster_31 = new Monster(monster_31_data);
const monster_32 = new Monster(monster_32_data);
const monster_33 = new Monster(monster_33_data);
const monster_34 = new Monster(monster_34_data);
const monster_35 = new Monster(monster_35_data);
const monster_36 = new Monster(monster_36_data);
const monster_37 = new Monster(monster_37_data);
const monster_38 = new Monster(monster_38_data);
const monster_39 = new Monster(monster_39_data);
const monster_40 = new Monster(monster_40_data);
const monster_41 = new Monster(monster_41_data);
const monster_42 = new Monster(monster_42_data);

//push monsters to the array

monsterList.push(monster_1, monster_2, monster_3, monster_4, monster_5, monster_6, monster_7, monster_8, monster_9, monster_10, monster_11, monster_12, monster_13, monster_14, monster_15, monster_16, monster_17, monster_18, monster_19, monster_20, monster_21, monster_22, monster_23, monster_24, monster_25, monster_26, monster_27, monster_28, monster_29, monster_30, monster_31, monster_32, monster_33, monster_34, monster_35, monster_36, monster_37, monster_38, monster_39, monster_40, monster_41, monster_42);

//Create player

const player = {
  name: " TBD",
  level: 1,
  experience: 0,
  maxExperience: 10,
  attack: 2,
  defense: 1,
  health: 10,
  maxHealth: 10
}

//Game logic

function changeMonster(value){
  const changeByValue = currentMonsterIndex + value;
  if(changeByValue < 0 || changeByValue > monsterList.length - 1) return;//do nothing
  
  currentMonsterIndex = changeByValue;
  updateHtml();
}
function attackMonster(){
  const monster = monsterList[currentMonsterIndex];
  let playerDamage = player.attack - monster.defense;
  let monsterDamage = monster.attack - player.defense;
  
  if(playerDamage <= 0) playerDamage = 1;//always deal at least 1 damage even to high defense
  if(monsterDamage <= 0) monsterDamage = 1;//same as above
  
  monster.health -= playerDamage;
  if(monster.health <= 0){
    rewardPlayer(monster);
    reviveEntity(monster);
  }else{
    player.health -= monsterDamage;
  }
  if(player.health <= 0){
    displayDeathMessage();
    reviveEntity(player);
    reviveEntity(monster);
  }
  updateHtml();
}

function reviveEntity(entity){
  entity.health = entity.maxHealth;
}

function rewardPlayer(monster) {
  const experienceGain = Math.floor(monster.attack + monster.defense + (monster.maxHealth/2));
  player.experience += experienceGain;
  
  // >while< is another type of loop
  while(player.experience > player.maxExperience){
    player.level += 1;
    player.experience -= player.maxExperience;
    player.attack += Math.floor((Math.random() * 3) + 1);
    player.defense += Math.floor((Math.random() * 3) + 1);
    player.maxHealth += Math.floor((Math.random() * 8) + 1);
    player.health = player.maxHealth;
    player.maxExperience = Math.floor(player.maxExperience * 1.1);
  }
}

function updateHtml() {
  let playerInfo = "";
  let monsterInfo = "";
  const currentMonster = monsterList[currentMonsterIndex];
  
  playerInfo += `<p>level: ${player.level} - Name:${player.name} - exp: ${player.experience}/${player.maxExperience}</p>`;
  playerInfo += `<p>Health: ${player.health}/${player.maxHealth}</p>`
  playerInfo += `<p>Attack: ${player.attack} - Defense: ${player.defense}</p>`
  
  monsterInfo += `<h2>${currentMonster.name}</h2>`;
  monsterInfo += `<p>Health: ${currentMonster.health}/${currentMonster.maxHealth}</p>`
  monsterInfo += `<p>Attack:${currentMonster.attack} - Defense:${currentMonster.defense}</p>`
  
  playerDiv.innerHTML = playerInfo;
  monsterDiv.innerHTML = monsterInfo;
}


function displayDeathMessage() {
  let spanId = document.getElementById("deathMessage");
  
  spanId.innerHTML = "Your soul has faded";
  setTimeout(function(){
    spanId.innerHTML = "";
  }, 3000)
}

updateHtml();
