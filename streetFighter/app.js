
currentPlayer = ""
let characters = {
    ryu:{
        stance: 'https://www.fightersgeneration.com/np5/char/ssf2hd/ryu-hdstance.gif',
        fight: 'https://media2.giphy.com/media/l2QE6znHVshMqR5ba/giphy.gif',
        hp: 1000,
        damage:100,
        super: 'https://www.fightersgeneration.com/characters3/ryu-vs-hurricane.gif'
    },
    ken:{
        stance: 'https://i.pinimg.com/originals/46/4b/36/464b36a7aecd988e3c51e56a823dbedc.gif',
        fight: 'https://i.pinimg.com/originals/11/4e/fc/114efc8f8a0693972bf4d8f925f6d6b7.gif',
        hp: 1000,
        damage:100,
        super: 'https://www.fightersgeneration.com/characters2/ken-sshinryuken.gif'
    },
    bison:{
        stance: 'https://www.fightersgeneration.com/np5/char/ssf2hd/bison-hdstance.gif',
        fight: 'https://www.fightersgeneration.com/characters/bison-bigsuper.gif',
        hp: 1000,
        damage: 100,
        super: 'https://www.fightersgeneration.com/characters/bison-huge-super.gif'
    },
    akuma:{
        stance: 'https://www.fightersgeneration.com/characters/akuma-fireburn.gif',
        fight: '',
        hp: 1200,
        damage:200,
        super: 'https://i.pinimg.com/originals/70/9f/86/709f86fb459b54b5ef2c9e9b7c52496c.gif'
    }
}
let opponents = {
    kungfuMasa:{
        stance: 'https://64.media.tumblr.com/tumblr_mdsna984yF1rptf33o1_500.gif',
        fight: 'https://static.wikia.nocookie.net/streetfighter/images/6/6f/Gen-ouga.gif/revision/latest?cb=20100704160022',
        hp: 1000,
        damage:100,
        super: 'https://www.fightersgeneration.com/characters/gen-grndrol.gif'
    },
    chunLi:{
        stance: 'https://i.pinimg.com/originals/82/53/51/8253519f8da31e96b61f544edabcec40.gif',
        fight: 'https://static.wikia.nocookie.net/streetfighter/images/b/ba/Chunli-bigsuper.gif/revision/latest/smart/width/250/height/250?cb=20100424184648',
        hp: 1000,
        damage:100,
        super: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUPzmM-HstFiUYy4zr0oRWqVl0WQK3CL6Hg&usqp=CAU'
    },
    dsalim:{
        stance: 'https://gifimage.net/wp-content/uploads/2017/10/dhalsim-gif-9.gif',
        fight: 'https://qph.cf2.quoracdn.net/main-qimg-afdd5a98d8771790fa93679ae1d1fc3f',
        hp: 1000,
        damage: 100,
        super: 'https://www.fightersgeneration.com/nf/char/gif/dhalsim/dhalsim-sfa3-yoga-flame.gif'
    }
}
let boards = [
    "https://i.pinimg.com/originals/80/f9/d4/80f9d4af066c7c4245b80ffd41975f29.gif","https://giffiles.alphacoders.com/133/13303.gif","https://i.pinimg.com/originals/80/f9/d4/80f9d4af066c7c4245b80ffd41975f29.gif","http://test.ultralinx.co/wp-content/uploads/2020/03/1_soizcay.gif","http://twistedsifter.com/wp-content/uploads/2013/05/animated-gifs-of-fighting-game-backgrounds-38.gif","https://i.pinimg.com/originals/ce/47/12/ce4712ed287eaa368c869c479febea03.gif"
]

const changeCharacters = (character) =>{
    if(character === "ryu"){
        character = characters.ryu

    let char = document.querySelector('.unoPlayer')

    let newPlayer = document.createElement('img')
    newPlayer.setAttribute('class', 'unoPlayer')
    newPlayer.setAttribute('src', characters.ryu.stance)

    char.replaceWith(newPlayer)
    currentPlayer = "ryu"
    } else if(character === "ken"){
        character = characters.ken

    let char = document.querySelector('.unoPlayer')

    let newPlayer = document.createElement('img')
    newPlayer.setAttribute('class', 'unoPlayer')
    newPlayer.setAttribute('src', characters.ken.stance)

    char.replaceWith(newPlayer)
    currentPlayer = "ken"
    }
    else if(character === "akuma"){
        character = characters.akuma

    let char = document.querySelector('.unoPlayer')

    let newPlayer = document.createElement('img')
    newPlayer.setAttribute('class', 'unoPlayer')
    newPlayer.setAttribute('src', characters.akuma.stance)

    char.replaceWith(newPlayer)
    currentPlayer = "akuma"
    }
    else if(character === "bison"){
        character = characters.bison

    let char = document.querySelector('.unoPlayer')

    let newPlayer = document.createElement('img')
    newPlayer.setAttribute('class', 'unoPlayer')
    newPlayer.setAttribute('src', characters.bison.stance)

    char.replaceWith(newPlayer)
    currentPlayer = "bison"
    }


}
const populateBackground= () =>{
    let rando = Math.floor(Math.random() * (5 - 0) + 0);
console.log(rando)
    let gameboard = document.querySelector('.arena');
    gameboard.style.backgroundImage = `url(${boards[rando]})`

}
const loadFighters = () =>{
    alert("Make device widescreen to select player")
    let p2 = document.querySelector('.playerTwo')
    let playa = document.createElement('img')
    playa.setAttribute('src', opponents.chunLi.stance)
    playa.setAttribute('class', 'dosPlayer')
    p2.append(playa)

}
const attack = () => {
    console.log("CurrentPlayer: ", currentPlayer)
    console.log("Attack")

    if(currentPlayer === "ryu"){
        currentPlayer = "ryu"
    let char = document.querySelector('.unoPlayer')

    let newPlayer = document.createElement('img')
    newPlayer.setAttribute('class', 'unoAttack')
    newPlayer.setAttribute('src', characters.ryu.super)

    char.replaceWith(newPlayer)
    } else if(currentPlayer === "ken"){
        currentPlayer = "ken"

    let char = document.querySelector('.unoPlayer')

    let newPlayer = document.createElement('img')
    newPlayer.setAttribute('class', 'unoAttack')
    newPlayer.setAttribute('src', characters.ken.super)

    char.replaceWith(newPlayer)
    }
    else if(currentPlayer === "akuma"){
        currentPlayer = "akuma"

    let char = document.querySelector('.unoPlayer')

    let newPlayer = document.createElement('img')
    newPlayer.setAttribute('class', 'unoAttack')
    newPlayer.setAttribute('src', characters.akuma.super)

    char.replaceWith(newPlayer)
    }
    else if(currentPlayer === "bison"){

        currentPlayer = "bison"
    let char = document.querySelector('.unoPlayer')

    let newPlayer = document.createElement('img')
    newPlayer.setAttribute('class', 'unoAttack')
    newPlayer.setAttribute('src', characters.bison.super)
    char.replaceWith(newPlayer)
    }

}
const playAudio = ()=>{
    let song = new Audio('Guile Theme.mp3')
    song.play()
}
const deductLife = () => {

}