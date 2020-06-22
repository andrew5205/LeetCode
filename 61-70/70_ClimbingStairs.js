// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

// Example 1:

// Input: 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function(n) {
//     if( n < 3) {
//         return n;
//     }
//     let arr = [1,1,2];
//     for ( let i = 3; i <= n; i++) {
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     return arr.pop();
// };

// Runtime: 64 ms, faster than 49.06% of JavaScript online submissions for Climbing Stairs.
// Memory Usage: 33.2 MB, less than 75.49% of JavaScript online submissions for Climbing Stairs.



// [1,1,2,3,5,8,13,]




// unfortunately times out in leetCode compliar 
function climbStairs(n) {
    if(n == 0) {
        return 1
    }
    if(n <= 2) {
        return n;
    }
    return climbStairs(n-1) + climbStairs(n-2);
}
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));



// function climbStairs(n) {
//     let a = 1, b = 2;
//     for ( let i = 3; i <=n; i++) {
//         next = a + b;
//         a = b;
//         b = next;
//     }
//     return n == 1? a : b;
// }
// console.log(climbStairs(1));
// console.log(climbStairs(2));
// console.log(climbStairs(3));


// iterate through array 
function climbStairs(n) {
    if( n < 3) {
        return n;
    }
    let arr = [1,1,2];
    for ( let i = 3; i <= n; i++) {
        arr.push(arr[i-1]+arr[i-2]);
    }
    return arr.pop();
}
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));


// the reason this question is just a fib question is 
// each time only one or two steps
// the possibility are already in defined by previous step

// for example, if there only one step left => only one way/ option to take
// if there's two steps ahead, options is 1+1 or 2, which is already in defined
// when we have 3 steps screenLeft, we have 1+1+1, 1+2, 2+1 three options

// use defined conditions, this became fibonacci sequence







