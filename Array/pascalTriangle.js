/*
Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
    var pascalTriangle = [];
    for (let i = 0; i < numRows; i++) {
        pascalTriangle[i] = new Array(i + 1);

        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                pascalTriangle[i][j] = 1;
            } else {
                pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
            }
        }
    }
    return pascalTriangle;
}