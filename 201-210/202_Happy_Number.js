// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: 
// Starting with any positive integer, replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1



// const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function(n) {
//     /**
// 	 * Not necessary I think, but the OJ algorithm appears
// 	 * to return false for non-positive numbers also.
// 	 */
//     if (n < 1) return false;
	
// 	/**
// 	 * This set will store numbers as we create them.
// 	 * If we create a number already in the set, we
// 	 * assume we're in an infinite cycle.
// 	 */
//     let set = new Set();
	
//     while (!set.has(n)) {
//         set.add(n);
//         let s = n.toString();
//         n = 0;
//         for (let i = 0; i < s.length; ++i) {
//             n += squares[s[i]];
//         }
//         if (n == 1) return true;
//     }
	
//     return false;
// };



// Runtime: 80 ms, faster than 39.13% of JavaScript online submissions for Happy Number.
// Memory Usage: 37.7 MB, less than 23.52% of JavaScript online submissions for Happy Number.

// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function(n) {
//     const dict = {};
//     while(n > 1 && !dict[n]) {
//         // console.log(n);
//         // update n to dict each time, 
//         // original input n
//         dict[n] = true;
//         // update n after calculation
//         n = n.toString().split('').reduce((acc, val) =>  acc + Math.pow(val, 2), 0);
//     }
//     // n == 1 -> true , n != 1 -> false 
//     return n == 1? true: false;
// };

const isHappy = function(n) {
    const dict = {};
    while(n > 1 && !dict[n]) {
        // console.log(n);
        // update n to dict each time, 
        // original input n
        dict[n] = true;
        // update n after calculation
        n = n.toString().split('').reduce((acc, val) =>  acc + Math.pow(val, 2), 0);
    }
    // n == 1 -> true , n != 1 -> false 
    return n == 1? true: false;
    // return n === 1;
};
console.log(isHappy(19));





// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function(n) {
//     const dict = {};
//     while(n > 1 && !dict[n]) {
//         // console.log(n);
//         // update n to dict each time, 
//         // original input n
//         dict[n] = true;
//         // update n after calculation
//         n = n.toString().split('').reduce((acc, val) =>  acc + Math.pow(val, 2), 0);
//     }
//     // n == 1 -> true , n != 1 -> false 
//     return n === 1;
// };

// Runtime: 76 ms, faster than 45.22% of JavaScript online submissions for Happy Number.
// Memory Usage: 38.3 MB, less than 16.62% of JavaScript online submissions for Happy Number.

const isHappy = function(n) {
    const dict = {};
    while(n > 1 && !dict[n]) {
        // console.log(n);
        // update n to dict each time, 
        // original input n
        dict[n] = true;
        // update n after calculation
        n = n.toString().split('').reduce((acc, val) =>  acc + Math.pow(val, 2), 0);
    }
    // n == 1 -> true , n != 1 -> false 
    return n === 1;
};
console.log(isHappy(18));









