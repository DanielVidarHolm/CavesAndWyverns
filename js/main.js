import {Character} from './character.js';
import {Monster} from './monster.js';
// Im the best
let monster;

document.querySelector('#actionButton').addEventListener('click',newMonster)




async function main(){
    let player = createCharacter()
    console.log(monster);
    console.log(player);
    
}
async function newMonster(){
    monster = await createMonster()
}
function createCharacter(){

    let character = new Character('Daniel', 14, 12, 10, 12, 13, 16,12,8,[{'sword-Attack': '6 damage'}],[{'sneak': '6 damage'}],0,'./img/placeholder_portrait.png')
    return character
}

async function fetchMonster(monster){
    let res = await fetch(`https://www.dnd5eapi.co/api/monsters/${monster}`)
    let data = await res.json()

    return data
}

async function createMonster() {
    const monsters = ['goblin', 'bandit', 'boar', 'cultist', 'dire-wolf', 'drow']
    let data = await fetchMonster(monsters[Math.floor(Math.random() * monsters.length)])
    
    let monster = new Monster(data['name'], data['armor_class'],data['hit_points'],data["strength"],data["dexterity"],data[ "constitution"],data["intelligence"],data["wisdom"],data["charisma"],data["actions"],data["special_abilities"],data["challenge_rating"],data["xp"],'./img/placeholder_monster.png')
    
    return monster
}









main()