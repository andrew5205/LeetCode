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