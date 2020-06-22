// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.

[0,1,1,2,4,7,13,24,44,81,149,274,504,927]

// Example 1:

// Input: n = 4
// Output: 4
// Explanation:
// T_3 = 0 + 1 + 1 = 2
// T_4 = 1 + 1 + 2 = 4
// Example 2:

// Input: n = 25
// Output: 1389537
 

// Constraints:

// 0 <= n <= 37
// The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.



// /**
//  * @param {number} n
//  * @return {number}
//  */
// var tribonacci = function(n) {
//     let arr = [0,1,1];
//     for ( let i = 3; i <= n; i ++) {
//         arr.push(arr[i-1]+arr[i-2]+arr[i-3]);
//     }
//     return arr[n];
// };

// Runtime: 64 ms, faster than 42.05% of JavaScript online submissions for N-th Tribonacci Number.
// Memory Usage: 32.8 MB, less than 97.06% of JavaScript online submissions for N-th Tribonacci Number.






// time complexity: O(2^n)
// space complexity: O(n)

// time limit exceede on leetcode 
function tri(n) {
    if (n <= 1) {
        return n;
    } 
    if (n == 2) {
        return 1;
    } else {
        return tri(n - 3) + tri(n - 2) + tri(n - 1);
    }
}
console.log(tri(4));
console.log(tri(25));






// time complexity: O(n)
// space complexity: O(n)
function tri(n) {
    let arr = [0,1,1];
    for ( let i = 3; i <= n; i ++) {
        arr.push(arr[i-1]+arr[i-2]+arr[i-3]);
    }
    return arr[n];
}
console.log(tri(3));
console.log(tri(4));
console.log(tri(25));



// related
// fibonncci number - 509 
// n-th tribonacci number - 1137
// min cost climbing number - 746 

