// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Example:

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.


// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var moveZeroes = function(nums) {
//     let j = 0;  // pointer for non-zero element
//     for( let i = 0; i < nums.length; i++) {
//         if( nums[i] !== 0) {
//             [[nums[j], nums[i]] = [nums[i], nums[j]]];
//             j++;
//         }
//     }
//     return nums;
// };


// Runtime: 76 ms, faster than 34.14% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 38.8 MB, less than 5.00% of JavaScript online submissions for Move Zeroes.



// ******************************************************************************************** //
function moveZeros(arr) {
    let j = 0;  // pointer for non-zero element
    for( let i = 0; i < arr.length; i++) {
        if( arr[i] !== 0) {
            [arr[j], arr[i]] = [arr[i], arr[j]];
            j++;
        }
    }
    return arr;
}

console.log(moveZeros([0,1,0,3,12]));


// two pointer 
// j = in-ordered index for non-zero element 
// i = iterate index 
// if the element is not zero, 
// replace to index j, using switching 
// move j to the next 



