// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. 
// Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4


// hash map
// key value pair

function singleNumber(arr) {
    const dict = {};
    for ( let i = 0; i < arr.length; i++) {
        if( !dict[arr[i]]) {
            dict[arr[i]] = 1;
        } else {
            dict[arr[i]] = 0;
        }
    }
    for ( k in dict) {
        if( dict[k] === 1) {
            return k;
        }
    }
}

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
