// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true


// /**
//  * @param {number[]} nums
//  * @return {boolean}
//  */
// var containsDuplicate = function(nums) {
//     const dict = {};

//     for ( let i = 0; i < nums.length; i++) {
//         if ( dict[nums[i]]) {
//             dict[nums[i]]++;
//         } else {
//             dict[nums[i]] = 1;
//         }
//     }

//     for ( k in dict) {
//         if (dict[k] > 1) {
//             return true;
//         }
//     }
//     return false;
// };



// approach 3
// hash table
// Runtime: 96 ms, faster than 32.29% of JavaScript online submissions for Contains Duplicate.
// Memory Usage: 46 MB, less than 5.00% of JavaScript online submissions for Contains Duplicate.

// time complexity: O(n)
// space complexity: O(n)

function containDuplicate(arr) {
    const dict = {};

    for ( let i = 0; i < arr.length; i++) {
        if ( dict[arr[i]]) {
            dict[arr[i]]++;
        } else {
            dict[arr[i]] = 1;
        }
    }

    for ( k in dict) {
        if (dict[k] > 1) {
            return true;
        }
    }
    return false;
}

console.log(containDuplicate([1,2,3,1]));
console.log(containDuplicate([1,2,3,4]));
console.log(containDuplicate([1,1,1,3,3,4,3,2,4,2]));



// approach 2 
// sorting 

// time complexity: O(n log n)
// space complexity: O(1)

function containDuplicate2(nums) {
    const arrSorted = nums.sort();
    for ( let i = 0; i < arrSorted.length-1; i++) {
        if ( arrSorted[i] == arrSorted[i+1] ) {
            return true;
        }
        return false;
    }
}
console.log(containDuplicate2([1,2,3,1]));
console.log(containDuplicate2([1,2,3,4]));
console.log(containDuplicate2([1,1,1,3,3,4,3,2,4,2]));



// amazing 
// Set can only store unique values. 
// So if Set.size is less than nums.length - there have been duplicates.

function containDuplicate3(nums) {
    return (new Set(nums).size !== nums.length);    
};

console.log(containDuplicate3([1,2,3,1]));
console.log(containDuplicate3([1,2,3,4]));
console.log(containDuplicate3([1,1,1,3,3,4,3,2,4,2]));