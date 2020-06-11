// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     const mySet = new Set();
//     for ( let i = 0; i < nums.length; i++) {
//         if ( mySet.has(nums[i])) {
//             return [i, indexof(nums[i])];
//         }
//         mySet.add(sum - nums[i]);
//     }
//     return false;
// };


// Runtime: 224 ms, faster than 7.87% of JavaScript online submissions for Two Sum.
// Memory Usage: 36.8 MB, less than 17.76% of JavaScript online submissions for Two Sum.





// ******************************************************************************************** //
// var twoSum = function(arr, target) {
    function twoSum(arr, target) {
        for( let i = 0; i < arr.length; i++) {
            for( let j = i + 1; j < arr.length; j++) {
                if ( arr[i] + arr[j] == target) {
                    return [i,j];
                }
            }
        }
        return "not found";
    }
    
    
    console.log(twoSum([2,7,11,15], 9));
    
    
    
    // ******************************************************************************************** //
    // AD
    // hash set
    function hasPairWithSum2(arr, sum) {
        // hash set just for keys
        const mySet = new Set();
        for ( let i = 0; i < arr.length; i++) {
            if ( mySet.has(arr[i])) {
                return true;
            }
            // first, iterate thru each element one by one
            // add each 'remaining' to the set 
            mySet.add(sum - arr[i]);
        }
        return false;
    }
    
    
    console.log(hasPairWithSum2([1,2,3,4,5,6], 8));
    
    