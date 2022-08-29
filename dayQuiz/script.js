// Variables and DataTypes

// A. Q + A

// How do we assign a value to a variable?
let assignment = true;

// How do we change the value of a variable?
let aYE = 1;
aYE = 3;
// console.log(a);

// How do we assign an existing variable to a new variable?

let apple = "red";

let orange = "orange";

apple = orange;
// console.log(apple);

// Declare =>
let human;
// Assign =>
human = "remy";
// Define =>
// console.log('remy')

// What is pseudocoding and why should you do it?
// PLaceholder/Coding Notes... .because it helps.

// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it? (60/40)
// --------------------------------------------------------{Strings}

let firstVariable;
firstVariable = "HelloWorld";
firstVariable = 2121;
let secondVar = firstVariable;
secondVar = "itsCornn";
console.log(firstVariable, secondVar);

//  Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.

let yourName = "YourNameAsA_String";

let answer = `Hello, my name is ${yourName}`;
console.log(answer);
// ------------------------------------------------------{Booleans}
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
// console.log(false && false ||  false && false && false || true); ***
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c);
// note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a * a === d);
console.log(a && a < d);
// note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == "48");

// ==========================================================={TheFarm got corrnn}

let animal = "SomethingElse";
if (animal === "Cow") {
  console.log("Moooooo");
} else {
  console.log("Hey! You're not a cow");
}
// ==========================================================={DriversEdEdNEddy}

let age = 44;
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry,you're too young");
}
// ========================================{Loops}

// for(let i=0;i<=10;i++){
//     console.log(i)
// }
// for(let i=12;i<=4000;i+=3){
//    console.log(i)
// }
// ==========================

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + "<-- is an even Number");
  } else {
    console.log(i);
  }
}
// ------------------------------[Gimme5]

for (let i = 0; i <= 100; i++) {
    if(i % 15 === 0){
        console.log('BOTH')
    }
    if (i % 5 === 0) {
      console.log(`I found a ${i}! Hi Five`);
    } if(i % 3 === 0){
        console.log(`Threes A Crowd --> ${i}`);
    }else {
      console.log(i);
    }
  }
// ------------------------------[Saving Account]

let bank_account2 = 0
for (let i = 0; i <= 100; i++) {
    bank_account2 += i
}
console.log(bank_account2 * 2)
// -----------------------------[Arrays/ControlFlow]

let quotes= ["EasyDoesIt","DontEatYellowSnow","BadaBing-BadaBoom"]


const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0])

randomThings[2] = "World"
console.log(randomThings)

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

console.log(ourClass[2])

console.log(ourClass[4])

ourClass[4] = "Octocat"
console.log(ourClass)

ourClass.push("CloudCity")
console.log(ourClass)

const myArray = [5, 10, 500, 20]

myArray.push("Aegon")
console.log(myArray)

myArray.shift()
console.log(myArray)

myArray.unshift("BobMarley")
console.log(myArray)

myArray.pop()
console.log(myArray)

myArray.reverse()
console.log(myArray)

let brooklyn = 100

if(brooklyn < 100){
    console.log('Smalls')
}else{
    console.log('Big')
}

if(brooklyn < 100){
    console.log('Smalls')
}else{
    console.log('Big')
}

 let monkey = 66
if(monkey < 5){
    console.log('lilNumber')
}
if(monkey > 10){
console.log('bigNumber')
}
else{
    console.log('Munkkey')
}
// -------------------------------------

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)

  kristynsCloset.splice(6,0,"RayBans")
  console.log(kristynsCloset)