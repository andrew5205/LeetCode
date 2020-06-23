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

// [0,1,1,2,3,5,8,13,21,34,55,89, 144,233,377,610,987,1597,2584,4181]




// Runtime: 96 ms, faster than 15.28% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 34.8 MB, less than 8.29% of JavaScript online submissions for Fibonacci Number.

// time complexity: O(2^n)
// space complexity: O(n)
function fib(n) {
    if( n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));


// Runtime: 96 ms, Runtime: 60 ms, faster than 69.73% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 32.7 MB, less than 98.22% of JavaScript online submissions for Fibonacci Number..8 MB, less than 8.29% of JavaScript online submissions for Fibonacci Number.

// time complexity: O(n)
// space complexity: O(n)
function fibArr(n) {
    let arr = [0,1];
    for( let i = 2; i <= n; i++) {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr[n];
    // return arr.pop();
}
console.log(fibArr(3));
console.log(fibArr(4));
console.log(fibArr(5));
console.log(fibArr(19));





// fibonacci

// Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, 
// treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. 
// Examples: rFib(2) = 1 (0+1); rFib(3) = 2 (1+1); 
// rFib(4) = 3 (1+2); rFib(5) = 5 (2+3). rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.


function fib(num) {
    var arr = [0, 1];
    for ( var i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[ i - 1]);
    }
    return arr;
}
console.log(fib(5));


function rFib(num) {
    if ( num < 2) {
        return num;
    } else {
        return rFib(num - 2) + rFib(num - 1);
    }
}
console.log(rFib(5));


function rTenFib(num) {
    return (num < 2) ? num : rTenFib( num - 2) + rTenFib(num - 1);
}
console.log(rTenFib(5));


// using dict object 
function objFib(num) {
    var dict = { 0:0, 1:1};
    if ( num <= 1) {
        return num;
    } else {
        for ( var i = 2; i <= num; i++) {
            dict[i] = dict[i-2] + dict[i-1];
        }
    }
    return dict[num];
}
console.log(objFib(5));


// * ***************************************************************** * //

// treat first two (num = 1, num = 1) Fibonacci vals as 1 and 1
function fibonacci(num) {
    var arr = [1, 1];
    for ( var i = 2; i <= num; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}
console.log(fibonacci(5));


function rFibonacci(num) {
    if ( num < 2) {
        return 1;
    } else {
        return rFibonacci( num - 2 ) + rFibonacci( num - 1 );
    }
}
console.log(rFibonacci(5));


function rTenFibonacci(num) {
    return ( num < 2) ? 1 : rTenFibonacci( num - 2) + rTenFibonacci( num - 1);
}
console.log(rTenFibonacci(5));



// *********************************************************************************** //

// /**
//  * @param {number} N
//  * @return {number}
//  */
// var fib = function(N, cache=[]) {
//     // check if value array already has the result
//     if( cache[N]) {
//         return cache[N];
//     }

//     // same as original recursion fib() 
//     // save the result into a variable 
//     let result;
//     if ( N < 2) {
//         result = N;
//     } else {
//         result = fib(N-1, cache) + fib(N-2, cache);
//     }
//     // update result to cache array 
//     cache[N] = result;

//     return result;
// };

// Runtime: 64 ms, faster than 65.21% of JavaScript online submissions for Fibonacci Number.
// Memory Usage: 33 MB, less than 88.21% of JavaScript online submissions for Fibonacci Number.

// Dynamic Programming 
// memoization
function fibDP(n, cache = []) {

    // check if value array already has the result
    if( cache[n]) {
        return cache[n];
    }

    // same as original recursion fib() 
    // save the result into a variable 
    let result;
    if ( n < 2) {
        result = n;
    } else {
        result = fibDP(n-1, cache) + fibDP(n-2, cache);
    }
    // update result to cache array 
    cache[n] = result;

    return result;
}
console.log(fibDP(40));


// related
// fibonncci number - 509 
// n-th tribonacci number - 1137
// min cost climbing number - 746 