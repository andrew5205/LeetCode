// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.
// Follow up:

// What if the given array is already sorted? How would you optimize your algorithm?
// What if nums1's size is small compared to nums2's size? Which algorithm is better?
// What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?



// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number[]}
//  */
// var intersect = function(nums1, nums2) {
//     let result = [];
//     for ( let i = 0; i < nums1.length; i++) {
//         for ( let j = 0; j < nums2.length; j++) {
//             if ( nums1[i] == nums2[j]) {
//                 result.push(nums1[i]);
//                 nums1.splice(i,1);
//                 nums2.splice(j,1);
//                 i--;
//                 j--;
//             }
//         }
//     }
//     return result;
// };


// Runtime: 88 ms, faster than 19.53% of JavaScript online submissions for Intersection of Two Arrays II.
// Memory Usage: 37 MB, less than 18.91% of JavaScript online submissions for Intersection of Two Arrays II.

// time complexity: O(n^2)
// space complexity: O(n)


// approach 1 - two pointer + splice 

function intersect(arr1, arr2) {
    let result = [];
    for ( let i = 0; i < arr1.length; i++) {
        for ( let j = 0; j < arr2.length; j++) {
            if ( arr1[i] == arr2[j]) {
                result.push(arr1[i]);
                arr1.splice(i,1);
                arr2.splice(j,1);
                i--;
                j--;
            }
        }
    }
    return result;
}


console.log(intersect([1,2,2,1],[2,2]));
console.log(intersect([4,9,5],[9,4,9,8,4]));