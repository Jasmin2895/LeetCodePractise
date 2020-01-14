/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 var twoSum = function(nums, target) {
     // use hashmap to store the differences between target value and numbers

     let comps = {};
     if(nums.length){
        for(let i=0;i<numw.length;i++){
            if(comps[nums[i]]>=0){
                return [comps[nums[i]],i];
            }
            comps[target-nums[i]] = i;
        } 
     }
 }