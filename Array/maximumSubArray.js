/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];

    let currSum = nums[0], maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currSum < 0) currSum = nums[i];
        else currSum = currSum + nums[i];

        if (maxSum < currSum) maxSum = currSum;
    }
    return maxSum;
}