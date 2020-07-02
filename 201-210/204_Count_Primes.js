// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.



// /**
//  * @param {number} n
//  * @return {number}
//  */
// var countPrimes = function(n) {
//     let arr = [];
//     let count = 0;

//     for ( let i = 0; i < n; i++) {
//         // set all in array to true
//         arr[i] = true;
//     }

//     // elements 
//     for( let i = 2; i*i < n; i++) {
//         // if its false, means its some others multiple
//         if(arr[i] == true) {
//             // increase multiples, multiples of base element
//             for( let j = 2; i*j < n; j++) {
//                 arr[i*j] = false;
//             }
//         }
//     }

//     for ( let i = 2; i < n; i++) {
//         if ( arr[i] === true) {
//             count++;
//         }
//     }
//     return count;
// };



// Runtime: 156 ms, faster than 68.60% of JavaScript online submissions for Count Primes.
// Memory Usage: 105.6 MB, less than 31.22% of JavaScript online submissions for Count Primes.



// time complexity: O(log(log(n)))
// space complexity: O(1)


// eliminate the multiples 
// count how many left
function countPrimes(n) {
    let arr = [];
    let count = 0;

    for ( let i = 0; i < n; i++) {
        // set all in array to true
        arr[i] = true;
    }

    // elements 
    for( let i = 2; i*i < n; i++) {  // sqrt
        // if its false, means its some others multiple
        if(arr[i] == true) {
            // increase multiples, multiples of base element
            for( let j = 2; i*j < n; j++) {
                arr[i*j] = false;
            }
        }
    }

    for ( let i = 2; i < n; i++) {
        if ( arr[i] === true) {
            count++;
        }
    }
    return count;
}


console.log(countPrimes(10));




// function isPrime(num) {
//     if( num < 2) {
//         return false;
//     }
//     for ( let i = 2; i < num; i++) {
//         if ( num % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

