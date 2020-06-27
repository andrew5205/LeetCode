// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
// For the purpose of this problem, 
// assume that your function returns 0 when the reversed integer overflows.



// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) {
//     const result = parseInt(x.toString().split('').reverse().join(''));                 
//     if (result > 0x7FFFFFFF) {
//         return 0;
//     }
//     return Math.sign(x) * result;
// };


// Runtime: 108 ms, faster than 14.94% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 37.3 MB, less than 27.41% of JavaScript online submissions for Reverse Integer.



function reverse(x) {
    const result = parseInt(x.toString().split('').reverse().join(''));
    if ( result > 0x7FFFFFFF) {
        return 0;
    }
    return Math.sign(x) * result;
}





function reverseInt(x) {
    if (x < 0) return -reverse(-x);

    var reversedInt = 0;

    while(x>0) {
        var a = x%10;
        x = Math.floor(x/10);
        
        //Should no larger than Math.floor(Number.MAX_VALUE/10)
        if(reversedInt >= 214748365)
            return 0;
        reversedInt = reversedInt*10+a;
    }
    return reversedInt;
}
