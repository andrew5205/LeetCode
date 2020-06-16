// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sortedStr1 = s.split('').sort().join('');
    const sortedStr2 = t.split('').sort().join('');
    if( sortedStr1 == sortedStr2) {
        return true;
    }
    return false;
};


// apporach 1 
// built-in function 

// Runtime: 104 ms, faster than 33.70% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 39.7 MB, less than 18.86% of JavaScript online submissions for Valid Anagram.

// time complexity: O(n Log n)
// space complexity: O(1)

function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    if( sortedStr1 == sortedStr2) {
        return true;
    }
    return false;
}

console.log(isAnagram('abc', 'bca'));