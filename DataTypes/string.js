
//========>  Strings
let thisString = "Example String"
let anotherString ="Boston is the best!"
// -------.length()
    console.log(thisString.length())

// -------.replace()
    console.log(anotherString.replace('Boston', 'NewYork'))

// --------.replaceAll()
    console.log(anotherString.replaceAll('o','*'))

// -------.slice()
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
    // -> returns Banana because negative parameters for this method will count each letter from the end of the array


// -------.toUpperCase()
let smallName = "antman"
    smallName.toUpperCase()
    // ---> returns ANTMAN

// -------.toLowerCase()
let turnedOff = "EXCITED"
    turnedOff.toLowerCase()
    // --> returns excited


// -------.concat()
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
    // ---> returns Hello World