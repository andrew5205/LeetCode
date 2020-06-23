// On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

// Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

// Example 1:
// Input: cost = [10, 15, 20]
// Output: 15
// Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
// Example 2:
// Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
// Output: 6
// Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
// Note:
// cost will have a length in the range [2, 1000].
// Every cost[i] will be an integer in the range [0, 999].



// /**
//  * @param {number[]} cost
//  * @return {number}
//  */
// var minCostClimbingStairs = function(cost) {
//     for (let i = 2; i < cost.length; i++) {
//         cost[i] += Math.min(cost[i-2], cost[i-1]);
//     }
//     return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
// };

// Runtime: 84 ms, faster than 26.42% of JavaScript online submissions for Min Cost Climbing Stairs.
// Memory Usage: 37.1 MB, less than 25.42% of JavaScript online submissions for Min Cost Climbing Stairs.

// time complexity: O(n)
// space complexity: O(n)


function minCostClimbStairs(cost) {
    for (let i = 2; i < cost.length; i++) {
        cost[i] += Math.min(cost[i-2], cost[i-1]);
    }
    return Math.min(cost[cost.length - 2], cost[cost.length - 1]);
}

console.log(minCostClimbStairs([10, 15, 20]));
console.log(minCostClimbStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));





// /**
//  * @param {number[]} cost
//  * @return {number}
//  */
// var minCostClimbingStairs = function(cost) {
//     let arr = []; 
//     arr[0] = cost[0];
//     arr[1] = cost [1];
    
//     for(let i = 2; i < cost.length; i++) {
//         arr[i] = cost[i] + Math.min(arr[i-1], arr[i-2]);
//     }

//     return Math.min(arr[arr.length-1], [arr[arr.length-2]]);
// };


// Runtime: 84 ms, faster than 26.42% of JavaScript online submissions for Min Cost Climbing Stairs.
// Memory Usage: 38.8 MB, less than 5.38% of JavaScript online submissions for Min Cost Climbing Stairs.


function minCostClimbStairs2(cost) {
    let arr = []; 
    arr[0] = cost[0];
    arr[1] = cost [1];
    
    for(let i = 2; i < cost.length; i++) {
        arr[i] = cost[i] + Math.min(arr[i-1], arr[i-2]);
    }

    return Math.min(arr[arr.length-1], [arr[arr.length-2]]);
}

console.log(minCostClimbStairs2([10, 15, 20]));
console.log(minCostClimbStairs2([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));