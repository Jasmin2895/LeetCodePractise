/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function (nums, target) {
    /* test cases 
    1. element is found in the array.
    2. element is suppose  to be at the last. 
    3. element at the begining.
    4. element at the middle.
    */
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        obj[Math.abs(nums[i] - target)] = i;
    }
    if (nums[obj[Object.keys(obj)[0]]] >= target) {
        return obj[Object.keys(obj)[0]];
    } else {
        return obj[Object.keys(obj)[0]] + 1;
    }
};
