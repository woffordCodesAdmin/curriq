let currentWord=""
let currentQuestion=""
let currentUserGuess;
let userScore = 0

let pointKeeper = document.querySelector('.points')
pointKeeper.innerHTML = userScore;
console.log(currentQuestion, currentWord);
const subject = {
  math: {
    questionOne: [
      "This Formula is a Theorum that reflects a2+b2=c2",
      "Pathagorean",
    ],
    questionTwo: ["Question", "Answer"],
    questionThree: ["Question", "Answer"],
    questionFour: ["Question", "Answer"],
    questionFive: ["Question", "Answer"],
  },
  science: {
    questionOne: ["Question", "Answer"],
    questionTwo: ["Question", "Answer"],
    questionThree: ["Question", "Answer"],
    questionFour: ["Question", "Answer"],
    questionFive: ["Question", "Answer"],
  },
  art: {
    questionOne: ["Question", "Answer"],
    questionTwo: ["Question", "Answer"],
    questionThree: ["Question", "Answer"],
    questionFour: ["Question", "Answer"],
    questionFive: ["Question", "Answer"],
  },
};

const rightAnswer = () =>{
  alert("Lucky You! Thats Correct! ")
  userScore++

}
const wrongAnswer = () =>{
  alert("Nope.")
  let badOption = document.querySelector('.falseContainer')
  let x = document.createElement('img')
  x.setAttribute('src','https://cliply.co/wp-content/uploads/2021/07/372107370_CROSS_MARK_400px.gif')
  x.setAttribute('class','wrongX')
  badOption.append(x)
}
// -----------Container of Words

// ---------Random Word and Question is Selected based on Theme

const evaluateAnswer = (letter) => {
  if (letter.length > 1) {
    alert("You can only Enter 1 Letter At A Time");
  }
  if(currentAnswer.includes(letter)){
    rightAnswer()
  }else{
    wrongAnswer()
  }
}


const guessWord = (currentWord) => {
  alert(
    "Guessing the Entire Word is Risky...If you Guess Wrong, GAME OVER! Tread Lightly!"
  );
  let hailMary = prompt("Enter FULL Word");
  if (hailMary.toLowerCase === currentWord.toLowerCase) {
    let game = document.querySelector("body");
    let image = document.createElement("img");
    let url = "https://media2.giphy.com/media/tFXCQpZf3Q95S/giphy.gif";
    image.setAttribute("src", url);
    image.setAttribute("class", "winner");
    game.replaceWith(image);
  } else {
    let game = document.querySelector("body");
    let image = document.createElement("img");
    let url = "https://thumbs.gfycat.com/NippyHighlevelFugu-max-1mb.gif";
    image.setAttribute("src", url);
    image.setAttribute("class", "loser");
    game.replaceWith(image);
  }
};

const submitAnswer=()=>{
  evaluateAnswer(guessLetter(currentUserGuess))
}

const guessLetter = (currentAnswer) => {
  currentAnswer = currentWord
  let guessLetter = prompt("Enter Your Guess.");
  return guessLetter
};

const populateTiles = (number) => {
  let numberOfTiles = number;
  let wordBank = document.querySelector(".wordContainer");
  for (i = 0; i <= number; i++) {
    let tile = document.createElement("div");
    tile.setAttribute("class", "wordTile");
    wordBank.append(tile);
  }
  // tile.setAttribute("onclick",guessLetter())
  console.log(`${numberOfTiles} created!`);
};

const populateTheme = () => {
  let screen = document.querySelector(".questionContainer");
  // let randomNum = Math.floor(Math.random() * (3 - 1) + 1);
  currentQuestion = subject.math.questionOne[0];
  // ---------makeRandom()???
  screen.innerHTML = currentQuestion;
  console.log(currentQuestion);

  currentAnswer = subject.math.questionOne[1];
  console.log(`CurrentAnser : ${currentAnswer}, ${currentAnswer.length}`);

  let magicNumber = currentAnswer.length;
  return magicNumber;
};

const gameOn = () => {
  // alert("Welcome To Hangman");
  populateTiles(populateTheme());
  
};
// The Screen Populates Blanks the length of the word selected

// User Guesses Letters in Word

// if User is Right the Letter Populates where it exists in word
// if User is wrong..the incorrect letter appears in falseContainer && 1 img is populated on hangPole to reflect the (Hangman)
// 5WrongTries: User Loses
// User Wins If All Letters in currentWord are guessed....Hangman animation populates screen
