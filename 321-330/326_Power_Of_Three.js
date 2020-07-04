// Given an integer, write a function to determine if it is a power of three.

// Example 1:
// Input: 27
// Output: true

// Example 2:
// Input: 0
// Output: false

// Example 3:
// Input: 9
// Output: true

// Example 4:
// Input: 45
// Output: false


// Follow up:
// Could you do it without using any loop / recursion?


// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function(n) {
//     let total = 1;
//     while( total < n) {
//         total *= 3;
//     }
//     return total == n;
// };


// Runtime: 396 ms, faster than 5.28% of JavaScript online submissions for Power of Three.
// Memory Usage: 47.3 MB, less than 64.70% of JavaScript online submissions for Power of Three.


function isPowerOfThree(n) {
    let total = 1;
    while( total < n) {
        total *= 3;
    }
    return total == n;
}

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(9));
console.log(isPowerOfThree(45));




// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function(n) {
//     if ( n < 1) {
//         return false;
//     }
//     while( n%3 == 0) {
//         n /= 3;
//     }
//     return n == 1;
// };


// Runtime: 320 ms, faster than 16.31% of JavaScript online submissions for Power of Three.
// Memory Usage: 46.4 MB, less than 77.31% of JavaScript online submissions for Power of Three.



function isPowerOfThree2(n) {
    if ( n < 1) {
        return false;
    }
    while( n%3 == 0) {
        n /= 3;
    }
    return n == 1;
}
console.log(isPowerOfThree2(27));
console.log(isPowerOfThree2(0));
console.log(isPowerOfThree2(9));
console.log(isPowerOfThree2(45));




// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function(n) {
//     return n.toString(3).split('').reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0) == 1;
// };


// Runtime: 380 ms, faster than 6.92% of JavaScript online submissions for Power of Three.
// Memory Usage: 45.6 MB, less than 99.58% of JavaScript online submissions for Power of Three.


// without loop or recursion 
function isPowerOfThreeToString(n) {
    return n.toString(3).split('').reduce((acc, curr) => parseInt(acc) + parseInt(curr), 0) == 1;
}

console.log(isPowerOfThreeToString(27));

// n.toString(3) makes the number into a string with base of 3, 
// split the string into Array, and use reduce() to sum up the number 
// if the sum is equal to 1, n is power of 3 
// 1, 10, 100, 10000, 1000000