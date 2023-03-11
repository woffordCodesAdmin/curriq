
let numContainer = []
let numOne = []
let num2 = []
let currentOperator = ""
let currentSym = ""

const addToScreen = (number) => {
    let display = document.querySelector('.screen')
    display.append(number)
    // numContainer.push(number) 
    // console.log(numContainer)
}
const setOperator = (o) => {
    currentOperator = o
    // let display = document.querySelector('.screen')
    // display.append(o)
    // numContainer.push(o)
    console.log(`Current Operator: ${o}`)
}

const solveProblem = () => {
    let sum;
    let display = document.querySelector('.screen')

    if (currentOperator === "+") {
        sum = numContainer[0] += numContainer[1]
    }
    if (currentOperator === "-") {
        sum = numContainer[0] -= numContainer[1]
    }
    if (currentOperator === "*") {
        sum = numContainer[0] * numContainer[1]
    }
    if (currentOperator === "/") {
        sum = numContainer[0] / numContainer[1]
    }
    display.innerHTML = sum
}


const addToContainer = () => {
    let display = document.querySelector('.screen')
    let onScreen = display.innerText
    numContainer.push(onScreen)
    display.innerText = " "
    console.log(numContainer);
    

}    

const solveAll = ()=> {
    console.log(numContainer);
    // display.innerText = " "
    console.log(numContainer);
    str = numContainer.join("")
    console.log(str)
    
}

const getNumberOfButton = (number)=>{

    numOne.push(number)
    console.log(numOne,"<----First Number")

}
const get2ndNumberOfButton = (number)=>{

    num2.push(number)
    console.log(num2,"<--- Second Number");
}


const finishMath = ()=>{

    let sum = numOne[0] + num2[0]
    let screen = document.querySelector('.screen')
    screen.innerHTML = sum
}



const addTwoNumbers= () => {

//  get button that i press to express the number i need



let x = prompt("Num One?")
let y = prompt("NumTwo?")
    
    let newx = parseInt(x)
    let newy = parseInt(y)
let sum = newx + newy
   let display=  document.querySelector('.screen')
   display.innerText
   console.log(display.innerText)
   display.innerHTML = sum
}