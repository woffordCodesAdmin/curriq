//---------- Array

let arkham = ["Brooklyn", "Bronx", "Yonkers", "Harlem"];
// --------isArray()
// returns true or false if its an array
arkham.isArray();
// ---> returns true

//  --------- toString()
let statementArr = ["I", "Love", "NYC"];
// ---> rerturns  'I Love NYC '

// ----------- Pop()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
// -->["Banana", "Orange", "Apple"]

// --------push()
fruits.push("Kiwi");
// -->["Banana", "Orange", "Apple","Kiwi"]

// --------shift()
fruits.shift();
// --->Orange,Apple,Mango

fruits.unshift("Lemon");
// ---> ["Lemon","Banana", "Orange", "Apple", "Mango"];
