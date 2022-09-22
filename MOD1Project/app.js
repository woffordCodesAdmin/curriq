// Jacks[for Melanie]
// ->Ball ..jacks
// How To Play: bounce ball and pick up Jacks then catch ball

// WinState: Points Limit = 10,000
// Lose State: Lose State

// LevelOneJack:https://atlas-content-cdn.pixelsquid.com/assets_v2/190/1902480984197043535/jpeg-600/G01.jpg

// Level2Jack:http://atlas-content-cdn.pixelsquid.com/stock-images/metal-jack-game-piece-toy-RJzQzEA-600.jpg

// LEVEL3 JACK: https://atlas-content-cdn.pixelsquid.com/assets_v2/184/1840130138293933990/jpeg-600/G01.jpg

let scoreContainer = 0;
let playerOne = {
  score: 0,
  turnToGo: false,
};
let playerTwo = {
  score: 0,
  turnToGo: false,
};

const startGame = (player) => {
  if (player === "playerOne") {
    playerOne.turnToGo = true;
  } else {
    playerTwo.turnToGo = true;
  }
};
// ---> startGame("playerOne")
const generateScore = () => {
  let points = document.querySelector(".points");
  points.innerHTML = scoreContainer;
};
generateScore();

const pickUpJax = (id) => {
  let currentJack = document.getElementById(`${id}`);
  currentJack.remove();
  scoreContainer++;
  determineRound();
  generateScore();
};
const bounceBall = () => {
  let ball = document.querySelector(".ball");

  ball.classList.toggle("bounced");
};
