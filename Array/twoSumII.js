/*
Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:

Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
*/


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (numbers, target) {
    let start = 0, end = numbers.length - 1, result = [];

    for (let i = 0; i < numbers.length; i++) {
        currentSum = numbers[start] + numbers[end];
        if (currentSum === target) {
            result.push(start + 1);
            result.push(end + 1);
            break;
        } else if (currentSum > target) {
            end--;
        } else {
            start++;
        }
    }
    return result;
}