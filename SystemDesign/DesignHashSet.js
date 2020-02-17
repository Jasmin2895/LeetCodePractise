/*
Design a HashSet without using any built-in hash table libraries.

To be specific, your design should include these functions:

add(value): Insert a value into the HashSet.
contains(value) : Return whether the value exists in the HashSet or not.
remove(value): Remove a value in the HashSet. If the value does not exist in the HashSet, do nothing.
*/

/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
    this.set = {};
}

/** 
 * @param {number} key
 * @return {void}
 */

MyHashSet.prototype.add = function (key) {
    this.set[key] = true;
}
/** 
 * @param {number} key
 * @return {void}
 */

MyHashSet.prototype.remove = function (key) {
    this.set[key] = false;
}
/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */

MyHashSet.prototype.contains = function (key) {
    return !!this.set[key];
}