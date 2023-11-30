const generateRandomNum = (min, max) => {
  let rando = Math.floor(Math.random() * (max - min) + min);
  return rando;
};

const consoleToScreen=(content)=>{
    let screen = document.querySelector(".logger")
    let spacer = document.createElement('div')
    spacer.setAttribute('class','organizer')
    spacer.innerHTML = content
    screen.append(spacer)
}

let player1 = {
  name: "USS Assembly",
  hull: 20,
  firepower: 5,
  accuracy: 7,
};

let a1 = {
  name: "Luna Space-Nargle",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image:
    "https://media0.giphy.com/media/3ohze3hIchu9ekjmDe/giphy.gif?cid=6c09b952rmqgc5t0wc36tyxkawwoknrodqdwhjqv4nvm75fo&rid=giphy.gif&ct=s",
};

let a2 = {
  name: "Synthezoid Paralaxer",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image:
    "https://media1.giphy.com/media/BcuLq7kvQWuftTzBh4/giphy.gif?cid=6c09b952vrbn5n247x0rvnmr3qgfhg1wcdso0fvo3e047meu&rid=giphy.gif&ct=s",
};

let a3 = {
  name: "Gonza-laz",
  hull: generateRandomNum(13, 16),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image: "https://media3.giphy.com/media/C3ByEpHvHupHi/giphy.gif"
};

let a4 = {
  name: "Munchkin Goober",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image:
    "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
};
let a5 = {
  name: "Reebok-Wearer",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image:
    "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
};
let a6 = {
  name: "Boston Celtic Fans",
  hull: generateRandomNum(3, 6),
  firepower: generateRandomNum(2, 4),
  accuracy: generateRandomNum(6, 8),
  image:
    "https://media0.giphy.com/avatars/sanghyoundominichan/nFrbk5Jp1COV.gif",
};

let allAliens = [a1, a2, a3, a4, a5, a6];

let currentAlien = a1;
let counter= 0
let defeatedEnemies = 0

consoleToScreen(`Current Target:  ${currentAlien.name}`)

const alienInfo =()=>{
    let namer = document.querySelector('.aName')
    namer.innerHTML = currentAlien.name
    let lifer = document.querySelector('.ahp')
    lifer.innerHTML = currentAlien.hull
    let heroHP = document.querySelector('.hp')
    heroHP.innerHTML = player1.hull
 }


const determineLifeHero = () => {
  consoleToScreen(player1.hull);
  if (player1.hull <= 0) {
   alert("Game Over")
  } else {
    startRound(currentAlien)
  }
};

const determineLifeAlien = () => {
    if (currentAlien.hull <= 0) {
        defeatedEnemies++
        if(defeatedEnemies === 5){
            alert("Player One Wins.")
        }
      switchAlien();
      counter++
      currentAlien = allAliens[counter]
      consoleToScreen(`Current Target: ${currentAlien.name}`)
  
    } else {
      alienAttack()
      determineLifeHero()
    }
  };


const startRound = () => {
  alienInfo()
  let power = player1.firepower;
  let opponentLife = currentAlien.hull;
  let shot = (opponentLife -= power);
  currentAlien.hull = shot;
  consoleToScreen(`${player1.name} damaged ${currentAlien.name} by ${power} HPs`);
  consoleToScreen(`${currentAlien.name}'s remaining life: ${shot}`);
  // --------------------------------------
  determineLifeAlien();
};


const switchAlien = () => {
    consoleToScreen("----------------NewRound---------");
    let elian = document.querySelector(".playerTwo");
    let aliYun = document.createElement("img");
    aliYun.setAttribute("src", allAliens[counter].image);
    aliYun.setAttribute("class", "playerTwo");
    elian.replaceWith(aliYun);
  };


const alienAttack = () => {
    consoleToScreen("ALIEN IS NOW ATTACKING")
  let strength = currentAlien.firepower;
  let ufoAttack = (player1.hull-=currentAlien.firepower);
  player1.hull = ufoAttack;
  consoleToScreen(
    `${player1.name} got shot  by ${currentAlien.name} with power of ${strength}`
  );
  consoleToScreen(`${player1.name}'s life is now ${ufoAttack}`);
};

