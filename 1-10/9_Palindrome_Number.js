// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.

// Example 1:

// Input: 121
// Output: true
// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?



// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     if ( x < 0) {
//         return false;
//     }
//     const str = x.toString();
//     for ( let i = 0; i < str.length; i++) {
//         if (str[i] != str[str.length-1 -i]) {
//             return false;
//         }
//     }
//     return true;
// };


// Runtime: 208 ms, faster than 57.18% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 45.9 MB, less than 43.38% of JavaScript online submissions for Palindrome Number.

function isPalindrome(x) {
    if ( x < 0) {
        return false;
    }
    const str = x.toString();
    for ( let i = 0; i < str.length; i++) {
        if (str[i] != str[str.length-1 -i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome(23));
console.log(isPalindrome(-23));
console.log(isPalindrome(323));




// ********  without converting to string  ************************************************************ //
// use %

// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {
//     let temp = x;
//     let rev = 0;
//     while ( temp > 0 ) {
//         rev = rev * 10 + temp % 10;
//         temp = Math.floor(temp / 10);
//     }
//     return rev === x;
// };

// Runtime: 180 ms, faster than 93.78% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 45.4 MB, less than 76.27% of JavaScript online submissions for Palindrome Number.


function isPalindromeM(x) {
    let temp = x;
    let rev = 0;
    while ( temp > 0 ) {
        rev = rev * 10 + temp % 10;
        temp = Math.floor(temp / 10);
    }
    return rev === x;
}
