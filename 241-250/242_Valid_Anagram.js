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



// approach 2 
// hash-map

// Runtime: 88 ms, faster than 51.85% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 38.6 MB, less than 28.28% of JavaScript online submissions for Valid Anagram.

// time complexity: O(n)
// space complexity: O(1)

function isAnagram(s, t) {
    let dict = {};
    for( let i = 0; i < s.length; i++) {
        if( dict[s[i]] ) {
            dict[s[i]]++;
        } else {
            dict[s[i]] = 1;
        }
    }
    
    for ( let j = 0; j < t.length; j++) {
        if( dict[t[j]]) {
            dict[t[j]]--;
        } else {
            dict[t[j]] = 1;
        }
    }

    let sum = 0;
    for( k in dict) {
        sum += dict[k];
        if( sum > 0) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram('abc', 'cba'));
console.log(isAnagram('abc', 'cbax'));


