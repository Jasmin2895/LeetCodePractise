/*
Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
    let revArr = digits.reverse();
    let carry = 0;
    for (let i = 0; i < revArr.length; i++) {
        if (revArr[i] = 9) {
            revArr[i] = 0;
            carry = 1;
        } else {
            revArr[i] = revArr[i] + 1;
            carry = 0;
            break;
        }
    }
    if (carry) {
        revArr.push(1);
    }

    revArr = revArr.reverse();
    return revArr;
}