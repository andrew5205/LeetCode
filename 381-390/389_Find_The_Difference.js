// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

// Example:

// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.




// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */
// var findTheDifference = function(s, t) {
//     let S = s.split('').sort();
//     let T = t.split('').sort();
//     for( let i = 0; i < T.length; i++) {
//         if( S[i] != T[i]) {
//             return T[i];
//         }
//     }
// };


// Runtime: 88 ms, faster than 26.06% of JavaScript online submissions for Find the Difference.
// Memory Usage: 35.5 MB, less than 83.61% of JavaScript online submissions for Find the Difference.


function findTheDifference(s,t) {

    let S = s.split('').sort();
    let T = t.split('').sort();
    for( let i = 0; i < T.length; i++) {
        if( S[i] != T[i]) {
            return T[i];
        }
    }
    // return T[t.length-1];
}





// /**
//  * 
//  * @param {string} s
//  * @param {string} t
//  * @return {character}
//  */
// var findTheDifference = function(s, t) {
//     if( !s ) {
//         return t;
//     }
//     let sSum = 0; 
//     let tSum = 0;
//     for( let i = 0; i < s.length; i++) {
//         sSum += s.charCodeAt(i);
//     }
//     for ( let i = 0; i < t.length; i++) {
//         tSum += t.charCodeAt(i);
//     }
//     return String.fromCharCode(tSum - sSum);
// };

// Runtime: 116 ms, faster than 7.27% of JavaScript online submissions for Find the Difference.
// Memory Usage: 36.4 MB, less than 49.18% of JavaScript online submissions for Find the Difference.


function findTheDifference2(s, t) {
    if( !s ) {
        return t;
    }
    let sSum = 0; 
    let tSum = 0;
    for( let i = 0; i < s.length; i++) {
        sSum += s.charCodeAt(i);
    }
    for ( let i = 0; i < t.length; i++) {
        tSum += t.charCodeAt(i);
    }
    return String.fromCharCode(tSum - sSum);
}
