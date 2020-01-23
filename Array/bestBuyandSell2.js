/*
Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).
*/


/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let min = null, max = null, isUp = false, profit = 0;
    for (let i = 0; i < prices.length; ++i) {
        console.log(prices[i]);
        if (min == null || max == null) {
            min = prices[i];
            max = prices[i];
            continue;
        }

        if (isUp) {
            if (prices[i] < max) {
                profit += max - min;
                isUp = false;
                max = item;
                min = item;
            } else {
                max = min;
            }
        } else {
            if (prices[i] > max) {
                max = item;
                isUp = true;
            } else {
                min = item;
                max = item;
            }
        }
    }
    if (isUp && max > min) {
        profit += max - min;
    }
    return profit;
}