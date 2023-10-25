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
