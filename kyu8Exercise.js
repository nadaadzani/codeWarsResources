// Century from Year

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// Best answer:
function century(year) {    // using the Math.ceil method, even though it's less than 5 to round up, it's perfect in this case
    return Math.ceil(year/100);
}

// My answer:
// function century(year) {
//     let currentCentury = year / 100
//     let century = 0
//     for (let i = 0; i < currentCentury; i++) {
//         century++
//     }
//     return century;
// }

// Reduce but Grow

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Best answer (clever):
function grow(x) {  // Using the .reduce method as it is an iterative method to process each array data quicker..
    return x.reduce((a, b) => a * b, 1);
}   // Where a is the acculumator (hasil penjumlahan), b is the currentValue, and 1 is the initialValue 
    // (it's 1 since we're gonna multiply each array data)

// My answer:
// function grow(num) {
//     let total = 1;
//     for (let i = 0; i < num.length; i++) {
//         total *= num[i];
//     }
//     return total;
// }

// Make any number negative 

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Examples
// makeNegative(1);    // return -1
// makeNegative(-5);   // return -5
// makeNegative(0);    // return 0
// makeNegative(0.12); // return -0.12

// Best answer:
function makeNegative(num) {    // Using Math.abs method to round any decimal and convert it into minus, (this makes 0 to have a minus)
    return -Math.abs(num);
}

// or

function makeNegative2(num) {   // Using a ternary operator to cleverly evaluate num
    return num < 0 ? num : -num;
}

// My answer:
// function makeNegative(num) {
//     if (num < 0) {
//         return num;
//     } else if (num > 0) {
//         return num - (num + num);
//     } else {
//         return num;
//     }
// }


// Total amounts of points

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// Best answer:
const points = games => games.reduce((output,current) => {      // Utilizing reduce() method again and ternary operator for shorter write
    return output += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
  },0)

// function points(games) {
//   return games.reduce((output,current)=>{
//     let x = parseInt(current[0]);
//     let y = parseInt(current[2]);
//     let value= x>y ? 3 : x===y ? 1 : 0;
//     return output+value;
//   },0)
// }

// My answer:
// function points(games) {        // Could've used for...of loop or forEach() method to access an array easier
//     let total = 0;
//     for (let i = 0; i < games.length; i++) {
//       let x = Number((games.slice(i, i+1).toString()[0]));
//       let y = Number((games.slice(i, i+1).toString()[2]));
//       if (x > y) {
//       total += 3
//       } else if (x === y) {
//       total += 1
//       } else if (x < y) {
//       total += 0
//       }
//     }
//     return total;
//   }


// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
  
// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

// Best answer: 
function getGrade (s1, s2, s3) {
    avg = (s1+s2+s3)/3;
    if (avg < 60)  return "F";
      else if (avg < 70) return "D";
      else if (avg < 80) return "C";
      else if (avg < 90) return "B";
      else return "A";
}

// My answer:
// function getGrade(s1, s2, s3) {     // More explicit ig
//     let total = s1 + s2 + s3;
//     let average = total / 3;
//     if (average >= 0 && average < 60) {
//       return 'F';
//     } else if (average >= 60 && average < 70) {
//       return 'D';
//     } else if (average >= 70 && average < 80) {
//       return 'C';
//     } else if (average >= 80 && average < 90) {
//       return 'B';
//     } else if (average >= 90 && average <= 100) {
//       return 'A';
//     }
//   }

// Convert a number into a string

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

// Best answer:
let stringToNumber = function(str){
  return parseInt(str);
}

// My answer:
// const stringToNumber = function(str){    // Really similiar, eh
//   return Number(str);
// }