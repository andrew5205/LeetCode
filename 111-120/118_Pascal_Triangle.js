// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// Triangle
// [
// [(0,0)],
// [(1, 0),(1, 1)],
// [(2, 0),(2, 1), (2,2)],
// [(3, 0),(3, 1), (3,2), (3, 3)],
// [(4, 0),(4, 1), (4,2), (4, 3), (4, 4)],
// ]


// /**
//  * @param {number} numRows
//  * @return {number[][]}
//  */
// var generate = function(numRows) {
//     let pascal = [];
//     for ( let i = 0; i < numRows; i++) {
//         pascal[i] = [];
//         // given condition
//         pascal[i][0] = 1;
//         pascal[i][i] = 1;

//         // j <= i-1
//         for( let j = 1; j < i; j++) {
//             // draw out the triangle, this will be easy to read
//             pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
//         }
//         // console.log(pascal[i]);
//     }
//     return pascal;
// };


// Runtime: 68 ms, faster than 37.21% of JavaScript online submissions for Pascal's Triangle.
// Memory Usage: 33.2 MB, less than 81.54% of JavaScript online submissions for Pascal's Triangle.


function generate(n) {
    let pascal = [];
    for ( let i = 0; i < n; i++) {
        pascal[i] = [];
        // given condition
        pascal[i][0] = 1;
        pascal[i][i] = 1;

        // j <= i-1
        for( let j = 1; j < i; j++) {
            // draw out the triangle, this will be easy to read
            pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j];
        }
        // console.log(pascal[i]);
    }
    return pascal;
}


console.log(generate(4));