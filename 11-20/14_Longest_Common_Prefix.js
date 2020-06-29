// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.


// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     if ( !strs.length) {
//         return '';
//     }

//     for( let i = 0; i < strs[0].length; i++) {
//         for ( let str of strs) {
//             if ( str[i] != strs[0][i]) {
//                 return str.slice(0, i);
//             }
//         }
//     }
//     return strs[0];
// };


// Runtime: 88 ms, faster than 14.77% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 37.6 MB, less than 12.51% of JavaScript online submissions for Longest Common Prefix.


function longestCommonPrefix(strs) {
    if ( !strs.length) {
        return '';
    }

    for( let i = 0; i < strs[0].length; i++) {
        for ( let str of strs) {
            if ( str[i] != strs[0][i]) {
                return str.slice(0, i);
            }
        }
    }
    return strs[0];
}

console.log(longestCommonPrefix(["flower","flow","flight"]));







// for ( a of array )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

// for ( k in object )
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
// ****************************************************************************************************************** //



// /**
//  * @param {string[]} strs
//  * @return {string}
//  */
// var longestCommonPrefix = function(strs) {
//     if ( !strs.length ) {
//         return '';
//     }

//     let result = '';
//     for ( let i = 0; i < strs[0].length; i++) {
//         for( let j = 1; j < strs.length; j++) {
//             if (strs[0][i] != strs[j][i]) {
//                 return result;
//             }
//         }
//         result += strs[0][i];
//     }
//     return result;
// };


// Runtime: 68 ms, faster than 62.36% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 37.5 MB, less than 14.47% of JavaScript online submissions for Longest Common Prefix.


function longestCommonPrefix2(strs) {
    if ( !strs.length ) {
        return '';
    }

    let result = '';
    for ( let i = 0; i < strs[0].length; i++) {
        for( let j = 1; j < strs.length; j++) {
            if (strs[0][i] != strs[j][i]) {
                return result;
            }
        }
        result += strs[0][i];
    }
    return result;
}
console.log(longestCommonPrefix2(["flower","flow","flight"]));