// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true


// /**
//  * @param {string} s
//  * @return {boolean}
//  */

// var hashMap = {
//     "(": ")",
//     "[": "]",
//     "{": "}",
// };
// var isValid = function(s) {
//     var stack = [];

//     for ( let i = 0; i < s.length; i++) {
//         if( hashMap[s[i]] ) {
//             stack.push(hashMap[s[i]]);
//         } else {
//             if ( s[i] != stack.pop()) {
//                 return false;
//             }
//         }
//     }
//     return stack.length == 0;
// };

// Runtime: 68 ms, faster than 56.33% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 33.6 MB, less than 92.23% of JavaScript online submissions for Valid Parentheses.


var hashMap = {
    "(": ")",
    "[": "]",
    "{": "}",
}

function isValid(str) {
    var stack = [];

    for ( let i = 0; i < str.length; i++) {
        if( hashMap[str[i]] ) {
            stack.push(hashMap[str[i]]);
        } else {
            if ( str[i] != stack.pop()) {
                return false;
            }
        }
    }
    return stack.length == 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(}"));
console.log(isValid("{[]}"));