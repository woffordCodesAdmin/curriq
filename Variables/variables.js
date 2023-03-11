
// These are examples of variables...these are declared using let meaning they can be reassigned

let stringVariable = "This Collection of Text/Chars"

let intVariable = 12

let boolVar = true

let arrayVar = ['this', 'that','the','one']
let alsoArray = [12,"Jordan", true, {name: "Jordan"}]


let objectVariable = {
    name: 'Jordan',
    age: 31, 
    location: 'Gotham City',
    greeting: function(){
        console.log("YERRR");
    }
}
    console.log(objectVariable.greeting);
// ----------> However const variables are immutable (aka. cantChange)

const socialsecNumber = 123456789

const birthdate = "12/10/1990"