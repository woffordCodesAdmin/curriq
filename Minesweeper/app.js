// MineSweeper:

// CreateBoard

// Seperate SafeTiles, NumberedTiles, BombTiles

// onClick User Can Choose Which Tile

// Logic to add Points

// Make an Object for all tileBatches
 let playerScore = 0

 let assignScore = () =>{
    //  display/increase score
 }



const triggerSmile = () => {
  let smile = document.querySelector(".smiley");
  smile.classList.toggle("unsmiley");
};

const assignTile = () => {
  let randomNum = Math.floor(Math.random() * 3);
  let loadState = ["loaded", "numbered", "free"];

  let userChoice = loadState[randomNum]
  console.log("Load State = ", loadState[randomNum]);

//   if(userChoice === loadState[0] ){
//     let here = document.querySelector('body')

//     let bomb = document.createElement('img')
//     bomb.setAttribute('src','https://media1.giphy.com/media/XrNry0aqYWEhi/200w.gif?cid=82a1493br60nmulgyhqkkkbjm54xjtqqo3sq9oh3tw8aaz3q&rid=200w.gif&ct=g')

//     here.replaceWith(bomb)
//     //   alert("GameOver")
//   }else{
//       playerScore += 100
//   }
};

