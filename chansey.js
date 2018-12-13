"use strict";

class Pokemon {
  constructor(name, hp, attack, defense, abilities) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.abilities = abilities;
  }
}

// function getPokemonData() {
axios.get("https://fizal.me/pokeapi/api/v2/name/chansey.json")
  .then((response) => {

    let data = response.data;

    let poke1 = new Pokemon(
      data.forms[0].name,
      data.stats[5].base_stat,
      data.stats[4].base_stat,
      data.stats[3].base_stat,
      data.abilities[0].name,
  )
    console.log(poke1)
    docum


    // var name = data.name;
    // var hp = data.stats[4].base_stat;
    // var attack = data.stats[4].base_stat;
    // var defense = data.stats[4].base_stat;
    // abilities = [`${abil1,abil2,abil3}`];
    // const abil1 = data.abilites[0].ability.name;
    // abil2 = data.abilities[1].ability.name;
    // abil3 = data.abilities[2].ability.name;

    // let chansey = new Pokemon(name, hp, attack, defense, abilites);

    // return chansey;





  })


//console.log(data);