export class Character {
    constructor(name, armor_class, hit_points, strength, dexterity, constitution, intelligence, wisdom, charisma, actions, special_abilities, xp, image){
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
        this.xp = xp;
        this.image = image;

        document.querySelector('#playerMaxHitPoints').innerText = this.hit_points
        document.querySelector('#playerCurHitPoints').innerText = this.cur_hit_points
        this.calcLifeBar()
        document.querySelector('#playerPortrait').src = this.image
        document.querySelector('#playerName').innerText = this.name;
        document.querySelector('#playerStats .armorText').innerText = this.armor_class;
        document.querySelector('#playerStats .strengthText').innerText = this.strength;
        document.querySelector('#playerStats .dexterityText').innerText = this.dexterity;
        document.querySelector('#playerStats .constitutionText').innerText = this.constitution;
        document.querySelector('#playerStats .intelligenceText').innerText = this.intelligence;
        document.querySelector('#playerStats .wisdomText').innerText = this.wisdom;
        document.querySelector('#playerStats .charismaText').innerText = this.charisma;
    }
    calcLifeBar(){
        document.querySelector('#playerHitPointsBar').style.width = `${Number(this.cur_hit_points) / Number(this.hit_points) * 100}%`
    }
    setMaxHitPoints(value){
        this.hit_points = value;
        document.querySelector('#playerMaxHitPoints').innerText = this.hit_points
        this.calcLifeBar()
    }
    setCurHitPoints(value){
        this.cur_hit_points = value;
        document.querySelector('#playerCurHitPoints').innerText = this.cur_hit_points
        this.calcLifeBar()
    }
    setName(value){
        this.name = value;
        document.querySelector('#playerName').innerText = this.name
    }
    setArmorClass(value){
        this.armor_class = value;
        document.querySelector('#playerStats .armorText').innerText = this.armor_class;
    }
    setStrength(value){
        this.strength = value;
        document.querySelector('#playerStats .strengthText').innerText = this.strength;
    }
    setDexterity(value){
        this.dexterity = value;
        document.querySelector('#playerStats .dexterityText').innerText = this.dexterity;
    }
    setConstitution(value){
        this.constitution = value;
        document.querySelector('#playerStats .constitutionText').innerText = this.constitution;
    }
    setIntelligence(value){
        this.intelligence = value;
        document.querySelector('#playerStats .intelligenceText').innerText = this.intelligence;
    }
    setWisdom(value){
        this.wisdom = value;
        document.querySelector('#playerStats .wisdomText').innerText = this.wisdom;
    }
    setCharisma(value){
        this.charisma = value;
        document.querySelector('#playerStats .charismaText').innerText = this.charisma;
    }
    
}