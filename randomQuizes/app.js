let questions =[
    {
        question: "Are the HTML tags and elements the same thing?",
        answer: "No. HTML elements are defined by a starting tag, may contain some content and a closing tag.For example, <h1>Heading 1</h1> is a HTML element but just <h1> is a starting tag and </h1> is a closing tag"
    }, 
    {
        question: "Build an HTML tag and assign it an attribute",
        answer: "<h1 class='exampleAttr'>Example Tag</h1>"
    },
    {
        question: "What is a META tag used for in HTML?",
        answer: "The <meta> tag defines metadata about an HTML document. Metadata is data (information) about data. ie: Language settings, viewport, etc __ex:{initial-scale=1.0}"
    },
    {
        question: "What is the significance of a head and body tag in HTML?",
        answer: "<head> tag provides the information about the document. It should always be enclosed in the <html> tag. This tag contains the metadata about the webpage and the tags which are enclosed by head tag like <link>, <meta>, <style>, <script>, etc. are not displayed on the web page. Also, there can be only 1 <head> tag in the entire Html document and will always be before the <body> tag.<body> tag defines the body of the HTML document. It should always be enclosed in the <html> tag. All the contents which needs to be displayed on the web page like images, text, audio, video, contents, using elements like <p>, <img>, <audio>, <heading>, <video>, <div>, etc. will always be enclosed by the <body> tag. Also, there can be only 1 body element in an HTML document and will always be after the <head> tag."
    },
    {
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is a CSS keyframe",
        answer: "This is responsible for the intermediate steps of the animation sequence than transitions."
    },
    {
        question: "Give an example of a psuedo class in CSS",
        answer: " :hover -> used to create a hover effect on a given element/tag"
    },
    {
        question: "Describe the difference between margin and padding",
        answer: "Margin -> OUTSIDE given ele. Padding -> INSIDE a given elements boxModel"
    },
    {
        question: "Show at least 2 ways to write a function in JS",
        answer: " declarative -> function example(){return x}   and arrowFunc-> const example()=>{return x}"
    },
    {
        question: "Whats the diff between arguments and parameters?",
        answer: "A parameter is a variable in a function definition. It is a placeholder and hence does not have a concrete value. An argument is a value passed during function invocation -has concrete value."
    },
    {
        question: "Under what circumstances can u change the value of a const variable?",
        answer: "...nevaEva"
    },

    {
        question: "Is Javascript a framework? If not, what is it? ",
        answer: "JavaScript is a very powerful client-side scripting language. JavaScript is used mainly for enhancing the interaction of a user with the webpage"
    },
    {
        question: "What does UI stand for?",
        answer: "User Interface"
    },
    {
        question: "What does GUI stand for?",
        answer: "Graphical User Interface"
    },
    {
        question: "Name All the DataTypes in JS",
        answer: "Number-String-Boolean-Object-Undefined"
    },
    {
        question: "Describe Global Vars vs. Local Vars. Explain what SCOPE is.",
        answer: "Global-> Accesible throughout application. Local-> Acccesible within func of local code block."
    },
    {
        question: " Show example of Camel Case vs Snake Case",
        answer: "pascalCase vs. snake_case_example"
    },
    {
        question: "Whats the difference between prompts() and alerts()",
        answer: "Prompts allow the user to input data dynamically and save response.. alerts are simply notifications"
    },
    {
        question: "What is NPM? What is it used for?",
        answer: "NodePackageManager -downloads libs and dependencies for Node "
    },
    // ---------[React]
    {
        question: "What is middleware and why is it used",
        answer: "software that acts as a bridge between an operating system or database and applications, especially on a network."
    },
    {
        question: "Explain MVC,why is it importantaa?",
        answer: "Model-Views-Controllers... Application Structure"
    },
    {
        question: "What is CRUD..what are the associated routes with CRUD",
        answer: "Create Read Update Delete..get/edit/update/delete/show/new/POST"
    },
    {
        question: "What is the point of React Components",
        answer: "Abstraction and Virtual DOM rendering"
    },
    // ---------[Express]
    {
        question: "What is a View Engine? Give an example or 2",
        answer: "{JSX,PUG,JADE,Express_React_Views}"
    },
    {
        question: "What is an SPA in React",
        answer: ""
    }
]

let students =[
    "Aaron (Luther) Mcknight",
    "Andrew Wilson",
    "Norman Taylor",
    "Juibril McCaster",
    "Yu Zuo",
    "Yuqing (Sunny) Li",
    "Oksana Kalyniak",
    "Mariessa D",
    "Sujitha Sri Vemulapally",
    "Jude Jean-Pierre",
    "Jeremy Guzman",
    "Kamara Daughtry",
    "Barry (TO) Terrell Owens",
    "Cam Duso",
    "Ricky Lee",
    "Blake James",
    "Ayse Kahraman",
    "Daren Porter"
]

const randomizeNumber =(max,min)=>{
   return  Math.floor( Math.random() * (max - min) + min)
}
const getStudent = ()=>{
    let currentNumber = randomizeNumber(15,0)
    let studentHolder =document.querySelector('.studentScrn')
    studentHolder.innerHTML = students[currentNumber]
}
const provideAnswer = (currentNumber)=>{
    let q_screen = document.querySelector('.screen')
    console.log("Answer Triggered")
    q_screen.append(questions[currentNumber].answer)
    console.log("A:",questions[currentNumber].answer)
}
const getQuestion =()=>{
    
    let q_screen = document.querySelector('.screen')
    let currentNumber = randomizeNumber(questions.length,0)
    q_screen.innerHTML =questions[currentNumber].question
    console.log("Question:",questions[currentNumber].question)
    // askQuestion
}

const rollDice = ()=>{
    getStudent()
    getQuestion()
}

const answeredQuestion = (correct)=>{
    if(correct==='true'){
        let student = document.createElement('div')
        student.setAttribute('class', 'leader') 
        let currentStudent = document.querySelector('.studentScrn').textContent
        console.log(currentStudent)
        student.innerHTML = currentStudent
        let board= document.querySelector('.leaderboard')
        board.append(student)
    }else{
        let body= document.querySelector('body')
        let cmonSon = document.createElement('img')
        cmonSon.setAttribute('src','https://i.makeagif.com/media/7-29-2016/GZTUat.gif')
        cmonSon.setAttribute('class','cmon')
        body.append(cmonSon)
    }
    
}

console.log(randomizeNumber(15,0)) 