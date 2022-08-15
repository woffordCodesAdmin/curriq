// // ''// Functions

// // // D.R.Y => Dont Repeat Yourself

// // // let bankAccount = 100

// // // const add = (x,y)=> {
// // //     console.log(x+y)
// // // }

// // // add(100,93)
// // // add(1,9)
// // // add(0,3)
// // // add(1000,1193)

// // let studentOne = {
// //   name: "Elias",
// //   grade: 98,
// // };
// // let studentTwo = {
// //   name: "Kamara",
// //   grade: 94,
// // };
// // let studentThree = {
// //   name: "Simone",
// //   grade: 45,
// // };

// // const addToStudentsGrade = (student) => {
// //   student.grade += 25;
// //   if (student.grade > 100) {
// //     console.log("MAX POINT LIMIT REACHED");
// //     student.grade = 100;
// //   }
// //   console.log("Final Grade: ", student.grade);
// // };

// // addToStudentsGrade(studentTwo);

// // Global Scope

// let username= "Jmwofford"

// const authenticateUser = ()=>{
//     console.log(username)
//     let userSocial = 199292039
// }
// // Local Scope


let name = "Jabril"

const addALastName = (lastname)=>{
    let fullName = name + lastname
    console.log(fullName)
}


addALastName("Obama")
addALastName("Houston")
addALastName("X")
addALastName("Johnson")
addALastName("Clinton")