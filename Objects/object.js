
// Object Literal

const house = {
    television: 'RokuTV',
    sneakerCollection: ['Jordans'],
    hasAC: true,

    turnOnAC: function(){
        console.log("brrrr")
    }
}


// const apple = {
//     // properties
//     color: 'red',
//     type: 'fruit',
//     isRipe: false,
//     beEaten: function(){
//         console.log('ChompChomp that was good')
//     }
// }

// if(apple.isRipe === true){
//     console.log(apple.beEaten())
// }else{
//     console.log('uSpoiledRotten')
// }

// apple.isRipe = true


// console.log(apple.beEaten())


// const student = {
//   firstName: "Enrique",
//   lastName: "Inglesias",
//   classes: ["Art", "Math", "CS101", "Science"],
//   grade: 93,
//   reportAttendance: function () {
//     return `${this.firstName} is here! Reporting for duty!`;
//   },
//   withdrawFromClass: function (){
//     return `I , ${this.firstName} ${this.lastName}am officially withdrawing from class :  ${this.classes[2]}.Please Inform the Registrar`
//   },
// };

// // Constructor
// function Course(title,professor,textbook){
//     this.title = title;
//     this.professor = professor;
//     this.textbook = textbook;
//     this.coreSyllabus = function(){
//         return `blah_Zae,blah_Zae, courseRequirements`
//     }
//     console.log(`You have just been enrolled in ${this.title}! Congrats!`)
// }

// // To instantiate a new Object
// const infoScience = new Course("Information Science", "Dr.Lipshitz", "Modern IS101");
// // const literature = new Course();
// // const science = new Course();
// // const calculus = new Course();

// console.log("Your Adjunct Professor : ",infoScience.professor)

// // Prototype

// Course.prototype.recieveExtraCredit = function(){
//     console.log('Awesome 20point XtraCredit awarded!')
// }