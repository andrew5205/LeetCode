// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]



function fizzBuzz(num) {
    let arr = [];
    for(let i = 1; i <= num; i++) {
        if( i % 3 == 0 && i % 5 == 0) {
            arr.push('FizzBuzz');
        } else if( i % 3 == 0 && i %5 != 0) {
            arr.push('Fizz');
        } else if(i % 5 == 0 && i %3 != 0) {
            arr.push('Buzz');
        } else arr.push(i);
    }
    return arr;
}

console.log(fizzBuzz(15));



// Use 'if' to specify a block of code to be executed, if a specified condition is true
// Use 'else' to specify a block of code to be executed, if the same condition is false
// Use 'else if' to specify a new condition to test, if the first condition is false



// code on LeetCode
// attention on output 
// else arr.push(`${i}`)


// Runtime: 100 ms, faster than 9.17% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 37.8 MB, less than 19.21% of JavaScript online submissions for Fizz Buzz.


// var fizzBuzz = function(n) {
//     let arr = [];
//     for(let i = 1; i <= n; i++) {
//         if( i % 3 == 0 && i % 5 == 0) {
//             arr.push('FizzBuzz');
//         } else if( i % 3 == 0 && i %5 != 0) {
//             arr.push('Fizz');
//         } else if(i % 5 == 0 && i %3 != 0) {
//             arr.push('Buzz');
//         } else arr.push(`${i}`);
//     }
//     return arr;
// };



// Runtime: 120 ms, faster than 5.26% of JavaScript online submissions for Fizz Buzz.
// Memory Usage: 38.3 MB, less than 5.06% of JavaScript online submissions for Fizz Buzz.

// function fizzBuzz2(n) {
//     let arr = [];
//     for( let i = 1; i <= n; i++) {
//         let str = '';
//         if ( i % 3 == 0) {
//             str = 'Fizz';
//         }
//         if ( i % 5 == 0) {
//             str += 'Buzz';
//         }
//         if ( str.length > 0) {
//             arr.push(str);
//         } else {
//             arr.push(i.toString());
//         }
//     }
//     return arr;
// } 

// console.log(fizzBuzz2(15));








