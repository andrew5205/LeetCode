// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2


// Runtime: 76 ms, faster than 26.17% of JavaScript online submissions for Majority Element.
// Memory Usage: 38.2 MB, less than 18.27% of JavaScript online submissions for Majority Element.


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var majorityElement = function(nums) {
//     const dict = {};
//     for(let i = 0; i < nums.length; i++) {
//         if ( !dict[nums[i]]) {
//             dict[nums[i]] = 1;
//         } else {
//             dict[nums[i]]++;
//         }
//     }

//     for( k in dict) {
//         if (dict[k] >= nums.length/2) {
//             return k
//         }
//     }
// };



function majorityElement(arr) {
    const dict = {};
    for(let i = 0; i < arr.length; i++) {
        if ( !dict[arr[i]]) {
            dict[arr[i]] = 1;
        } else {
            dict[arr[i]]++;
        }
    }

    for( k in dict) {
        if (dict[k] >= arr.length/2) {
            return k
        }
    }
}

console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));