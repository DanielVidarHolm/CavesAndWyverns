export class Monster {
    constructor(name, armor_class, hit_points, strength, dexterity, constitution, intelligence, wisdom, charisma, actions, special_abilities, challenge_rating, xp, image ){
        this.name = name;
        this.armor_class = armor_class;
        this.hit_points = hit_points;
        this.cur_hit_points = hit_points;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.actions = actions;
        this.special_abilities = special_abilities;
        this.challenge_rating = challenge_rating;
        this.xp = xp;
        this.image = image;
        
        document.querySelector('#monsterMaxHitPoints').innerText = this.hit_points
        document.querySelector('#monsterCurHitPoints').innerText = this.cur_hit_points
        this.calcLifeBar()
        document.querySelector('#monsterPortrait').src = this.image
        document.querySelector('#monsterName').innerText = this.name;
        document.querySelector('#monsterStats .armorText').innerText = this.armor_class;
        document.querySelector('#monsterStats .strengthText').innerText = this.strength;
        document.querySelector('#monsterStats .dexterityText').innerText = this.dexterity;
        document.querySelector('#monsterStats .constitutionText').innerText = this.constitution;
        document.querySelector('#monsterStats .intelligenceText').innerText = this.intelligence;
        document.querySelector('#monsterStats .wisdomText').innerText = this.wisdom;
        document.querySelector('#monsterStats .charismaText').innerText = this.charisma;
    }
    calcLifeBar(){
        document.querySelector('#monsterHitPointsBar').style.width = `${Number(this.cur_hit_points) / Number(this.hit_points) * 100}%`
    }
    setMaxHitPoints(value){
        this.hit_points = value;
        document.querySelector('#monsterMaxHitPoints').innerText = this.hit_points
        this.calcLifeBar()
    }
    setCurHitPoints(value){
        this.cur_hit_points = value;
        document.querySelector('#monsterCurHitPoints').innerText = this.cur_hit_points
        this.calcLifeBar()
    }
    

}