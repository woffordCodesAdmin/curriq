
const fs = require('fs');
console.log(typeof fs);


const arr = ['1','2','3','4','5']
strArr = arr.toString()

fs.writeFile('./dictionary.txt', strArr, function() {
  console.log('done creating file');
});


fs.readFile










// const fs = require('fs');
// let daysOfWeek = require('./days-of-week')
// // console.log(typeof fs);

// fs.writeFile('./hello.txt', 'Hello!', function() {
// //   console.log('done creating file');
// });

// console.log(daysOfWeek)