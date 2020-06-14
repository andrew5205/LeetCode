// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. 
// Twelve is written as, XII, which is simply X + II. 
// The number twenty seven is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. 
// However, the numeral for four is not IIII. 
// Instead, the number four is written as IV. 
// Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. 
// There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. 
// Input is guaranteed to be within the range from 1 to 3999.

// Example 1:
// Input: "III"
// Output: 3


// Example 2:
// Input: "IV"
// Output: 4


// Example 3:
// Input: "IX"
// Output: 9


// Example 4:
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.


// Example 5:
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.






// /**
//  * @param {string} s
//  * @return {number}
//  */
// var romanToInt = function(s) {
//     const dict = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
//     let output = 0;

//     // 6 condition
//     // IV, IX
//     if (s.indexOf('IV')!= -1) {
//         output -= 2;
//     }
//     if (s.indexOf('IX')!= -1) {
//         output -= 2;
//     }
//     // XL, XC
//     if (s.indexOf('XL')!= -1) {
//         output -= 20;
//     }
//     if (s.indexOf('XC')!= -1) {
//         output -= 20;
//     }
//     // CD, CM
//     if (s.indexOf('CD')!= -1) {
//         output -= 200;
//     }
//     if (s.indexOf('CM')!= -1) {
//         output -= 200;
//     }


//     for ( let i = 0; i < s.length; i++) {
//         output += dict[s[i]];
//     }
//     return output;
// };


function romanToInteger(s) {
    const dict = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let output = 0;

    // 6 condition
    // IV, IX
    if (s.indexOf('IV')!= -1) {
        output -= 2;
    }
    if (s.indexOf('IX')!= -1) {
        output -= 2;
    }
    // XL, XC
    if (s.indexOf('XL')!= -1) {
        output -= 20;
    }
    if (s.indexOf('XC')!= -1) {
        output -= 20;
    }
    // CD, CM
    if (s.indexOf('CD')!= -1) {
        output -= 200;
    }
    if (s.indexOf('CM')!= -1) {
        output -= 200;
    }


    for ( let i = 0; i < s.length; i++) {
        output += dict[s[i]];
    }
    return output;
}


console.log(romanToInteger('III'));
console.log(romanToInteger('IV'));
console.log(romanToInteger('IX'));
console.log(romanToInteger('LVIII'));
console.log(romanToInteger('MCMXCIV'));


// Complexity Analysis

// Let nn be the length of the input string (the total number of symbols in it).

// Time complexity : O(1)O(1).

// As there is a finite set of roman numerals, the maximum number possible number can be 3999, which in roman numerals is MMMCMXCIX. As such the time complexity is O(1)O(1).

// If roman numerals had an arbitrary number of symbols, then the time complexity would be proportional to the length of the input, i.e. O(n)O(n). This is assuming that looking up the value of each symbol is O(1)O(1).

// Space complexity : O(1)O(1).

// Because only a constant number of single-value variables are used, the space complexity is O(1)O(1).



// approach 3 
// right to left 

function romanToInt(str) {
    // const dict = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000,IV:4,IX:9,XL:40,XC:90,CD:400,CM:900};
    const dict = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    result = 0;
    for ( let i = str.length-1; i >= 0; i--) {
        // 0 1 2 3 
        // s[2] < s[3] => s[i] < s[i+1]
        //  I V 
        // starting from right most 
        // 3 -> 2 -> 1 -> 0
        if( dict[str[i]] < dict[str[i+1]]) {
            result -= dict[str[i]];
        } else {
            result += dict[str[i]];
        }
    }
    return result;
}


console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));
