// audio file
// sample mp3/4

// bass,hi-hat,snare,buzzer,
let xplode = new Audio("/BEATS/distant-explosion-80398.mp3");

console.log("Pinged!");
let xplosion = document.querySelector(".beatPad");

xplosion.addEventListener("click", () => {
  xplode.play();
});
