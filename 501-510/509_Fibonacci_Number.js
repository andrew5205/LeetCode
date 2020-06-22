// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), for N > 1.
// Given N, calculate F(N).

 

// Example 1:

// Input: 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.



// /**
//  * @param {number} N
//  * @return {number}
//  */
// var fib = function(N) {
//     if( N < 2) {
//         return N;
//     }
//     return fib(N-1) + fib(N-2);
// };


// Runtime: 96 ms, faster than 15.28% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 34.8 MB, less than 8.29% of JavaScript online submissions for Fibonacci Number.

// [0,1,1,2,3,5,8,13,21,34,55,89, 144,233,377,610,987,1597,2584,4181]

function fib(n) {
    if( n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));



function fibArr(n) {
    let arr = [0,1];
    for( let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr.pop();
}
console.log(fibArr(3));
console.log(fibArr(4));
console.log(fibArr(5));
console.log(fibArr(19));

