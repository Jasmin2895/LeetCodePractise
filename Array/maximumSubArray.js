/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
    let currSum = 0, maxSum = 0;
    for (let i = 0; i < nums.length; i++) {
        currSum = Math.max(0, nums[i] + currSum);
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
}