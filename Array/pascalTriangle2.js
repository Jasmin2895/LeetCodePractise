/*
Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

Note that the row index starts from 0.
*/


/**
 * @param {number} rowIndex
 * @return {number[]}
 */


var getRow = function (rowIndex) {
    let pascalTriangle = [];
    for (let i = 0; i < rowIndex + 1; i++) {
        pascalTriangle[i] = new Array(i + 1);
        for (let j = 0; j < i + 1; j++) {
            if (j == 0 || j == i) {
                pascalTriangle[i][j] = 1;
            } else {
                pascalTriangle[i][j] = pascalTriangle[i - 1][j - 1] + pascalTriangle[i - 1][j];
            }
        }
    }
    return pascalTriangle[rowIndex];
};

