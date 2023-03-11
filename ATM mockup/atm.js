
const displayToScreen = (input) => {
    let screenView = document.querySelector('.scrn2')
    screenView.append(input) 
}

const cardInserted =()=>{
    alert("Welcome User!")
    pinNum = prompt(" Please Enter PIN ")
    enterPin(pinNum)
    // Show Options
}
const enterPin = (pin)=>{
    if(typeof(pin) != Integer && pin.length() != 4 ){
        console.log("Please Enter Numeric Pin ")
    }else{
        displayToScreen("Welcome Back. ")
    }
}
const displayNum = (num)=>{
    displayToScreen(num)
}
const clearScreen = ()=>{
    let screenView = document.querySelector('.scrn2')
    let oldTxt = screenView.textContent
    console.log(oldTxt);

}
