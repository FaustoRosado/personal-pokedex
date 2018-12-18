
class Pokemon{
    constructor(name,hp,attack,defense,abilities=[]){
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.abilities = abilities
        this.name = name
    }

    addAbility(ability){
        this.abilities.push(ability)
    }
}

class Satoshi{
    constructor(){
        this.pokemon = []
    }

    all(){
        return this.pokemon
    }

    add(poke){
        this.pokemon.push(poke)
    }

    get(name){
        for(let i = 0; i < this.pokemon.length; i++){
            if(name == this.pokemon[i].name){
                return this.pokemon[i]
            }
        }
    }

}

let fausto = new Satoshi()

axios.get("https://pokeapi.co/api/v2/pokemon/amoonguss/")
.then((response) => {
    let data =  response.data
    let hp = document.getElementById("amoonguss-hp")
    let attack = document.getElementById("amoonguss-attack")
    let defense = document.getElementById("amoonguss-defense")
    let abilities = document.getElementById("amoonguss-abilities")



    let amoonguss = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
        amoonguss.addAbility(item.ability.name)
        
        abilities.innerHTML += item.ability.name +"<br>"
    })

    fausto.add(amoonguss)
    hp.innerHTML = amoonguss.hp
    attack.innerHTML = amoonguss.attack
    defense.innerHTML = amoonguss.defense

}).catch((error) => {
    console.log(error)
  })

  axios.get("https://pokeapi.co/api/v2/pokemon/chansey/")
.then((response) => {
    let data = response.data
    let hp = document.getElementById("chansey-hp")
    let attack = document.getElementById("chansey-attack")
    let defense = document.getElementById("chansey-defense")
    let abilities = document.getElementById("chansey-abilities")


    let chansey = new Pokemon(
        data.name,
        data.stats[5].base_stat,
        data.stats[4].base_stat,
        data.stats[3].base_stat,
    )

    data.abilities.forEach((item) => {
        chansey.addAbility(item.ability.name)
        abilities.innerHTML += item.ability.name +"<br>"
    })


    fausto.add(chansey)
    hp.innerHTML = chansey.hp
    attack.innerHTML = chansey.attack
    defense.innerHTML = chansey.defense

}).catch((error) => {
    console.log(error)
  })


  axios.get("http://fizal.me/pokeapi/api/68.json")
  .then((response) => {
      let data = response.data
      let hp = document.getElementById("machamp-hp")
      let attack = document.getElementById("machamp-attack")
      let defense = document.getElementById("machamp-defense")
      let abilities = document.getElementById("machamp-abilities")


      let machamp = new Pokemon(
          data.name,
          data.stats[5].base_stat,
          data.stats[4].base_stat,
          data.stats[3].base_stat,
      )

      data.abilities.forEach((item) => {
          machamp.addAbility(item.ability.name)
          abilities.innerHTML += item.ability.name +"<br>"
      })


      fausto.add(machamp)
      hp.innerHTML = machamp.hp
      attack.innerHTML = machamp.attack
      defense.innerHTML = machamp.defense

      console.log(fausto.get("machamp"))


  }).catch((error) => {
      console.log(error)
    })

    console.log(fausto.get("machamp"))

    let button = document.getElementById("scroll")
    button.addEventListener("click", (event) => {
        let div = document.getElementById("amoonguss")
        div.scrollIntoView({behavior: "smooth"});
    });

    let button2 = document.getElementById("scroll2")
    button2.addEventListener("click", (event) => {
        let div = document.getElementById("chansey")
        div.scrollIntoView({behavior: "smooth"});
    });

    let button3 = document.getElementById("scroll3")
    button3.addEventListener("click", (event) => {
        let div = document.getElementById("machamp")
        div.scrollIntoView({behavior: "smooth"});
    });


    let machamp = document.getElementById("machamp-pic")
    machamp.addEventListener("mouseover", function( event ) {   
        machamp.src = "machamp-shiny.png";
    })

    machamp.addEventListener("mouseout", function( event ) {   
        machamp.src = "machamp.png";
    })

    let chansey = document.getElementById("chansey-pic")
    chansey.addEventListener("mouseover", function( event ) {   
        chansey.src = "chansey-shiny.png";
    })

    chansey.addEventListener("mouseout", function( event ) {   
        chansey.src = "chansey.png";
    })

    let amoonguss = document.getElementById("amoonguss-pic")
    amoonguss.addEventListener("mouseover", function( event ) {   
        amoonguss.src = "amoonguss-shiny.png";
    })

    amoonguss.addEventListener("mouseout", function( event ) {   
        amoonguss.src = "amoonguss.png";
    })

    window.addEventListener("scroll", (event) => {
        
        if(window.scrollY > 500){
            let amoongussPic = document.getElementById("amoonguss-pic")
            amoongussPic.style.animation = "fadeIn 0.6s forwards"
            
        }

        if(window.scrollY > 550){
            let amoongussHPLabel = document.getElementById("amoonguss-hp-label")
            amoongussHPLabel.style.animation = "fadeIn 0.6s forwards"
            let amoongussHP = document.getElementById("amoonguss-hp")
            amoongussHP.style.animation = "fadeIn 1.6s forwards"
            let amoongussAttackLabel = document.getElementById("amoonguss-attack-label")
            amoongussAttackLabel.style.animation = "fadeIn 2.6s forwards"
            let amoongussAttack = document.getElementById("amoonguss-attack")
            amoongussAttack.style.animation = "fadeIn 3.6s forwards"

            let amoongussDefenseLabel = document.getElementById("amoonguss-defense-label")
            amoongussDefenseLabel.style.animation = "fadeIn 4.6s forwards"
            let amoongussDefense = document.getElementById("amoonguss-defense")
            amoongussDefense.style.animation = "fadeIn 5.6s forwards"

            let amoongussAbilitiesLabel = document.getElementById("amoonguss-abilities-label")
            amoongussAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
            let amoongussAbilities = document.getElementById("amoonguss-abilities")
            amoongussAbilities.style.animation = "fadeIn 5.6s forwards"

            
        }

        if(window.scrollY > 1200){
            let chanseyPic = document.getElementById("chansey-pic")
            chanseyPic.style.animation = "fadeIn 0.6s forwards"
            
        }

        if(window.scrollY > 1250){
            let chanseyHPLabel = document.getElementById("chansey-hp-label")
            chanseyHPLabel.style.animation = "fadeIn 0.6s forwards"
            let chanseyHP = document.getElementById("chansey-hp")
            chanseyHP.style.animation = "fadeIn 1.6s forwards"
            let chanseyAttackLabel = document.getElementById("chansey-attack-label")
            chanseyAttackLabel.style.animation = "fadeIn 2.6s forwards"
            let chanseyAttack = document.getElementById("chansey-attack")
            chanseyAttack.style.animation = "fadeIn 3.6s forwards"

            let chanseyDefenseLabel = document.getElementById("chansey-defense-label")
            chanseyDefenseLabel.style.animation = "fadeIn 4.6s forwards"
            let chanseyDefense = document.getElementById("chansey-defense")
            chanseyDefense.style.animation = "fadeIn 5.6s forwards"

            let chanseyAbilitiesLabel = document.getElementById("chansey-abilities-label")
            chanseyAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
            let chanseyAbilities = document.getElementById("chansey-abilities")
            chanseyAbilities.style.animation = "fadeIn 5.6s forwards"
        }

        if(window.scrollY > 1900){
            let machampPic = document.getElementById("machamp-pic")
            machampPic.style.animation = "fadeIn 0.6s forwards"
            
        }

        if(window.scrollY > 1950){
            let machampHPLabel = document.getElementById("machamp-hp-label")
            machampHPLabel.style.animation = "fadeIn 0.6s forwards"
            let machampHP = document.getElementById("machamp-hp")
            machampHP.style.animation = "fadeIn 1.6s forwards"
            let machampAttackLabel = document.getElementById("machamp-attack-label")
            machampAttackLabel.style.animation = "fadeIn 2.6s forwards"
            let machampAttack = document.getElementById("machamp-attack")
            machampAttack.style.animation = "fadeIn 3.6s forwards"

            let machampDefenseLabel = document.getElementById("machamp-defense-label")
            machampDefenseLabel.style.animation = "fadeIn 4.6s forwards"
            let machampDefense = document.getElementById("machamp-defense")
            machampDefense.style.animation = "fadeIn 5.6s forwards"

            let machampAbilitiesLabel = document.getElementById("machamp-abilities-label")
            machampAbilitiesLabel.style.animation = "fadeIn 5.6s forwards"
            let machampAbilities = document.getElementById("machamp-abilities")
            machampAbilities.style.animation = "fadeIn 5.6s forwards"
        }
    })