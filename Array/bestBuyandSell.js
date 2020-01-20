/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.
*/


/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    if (prices.length < 2) {
        return 0;
    }
    let maxProfit = 0;
    let maxStock = Math.max(prices[prices.length - 1], prices[prices.length - 2]);
    for (let i = prices.length - 2; i > -1; i--) {
        let profit = maxStock - prices[i];
        maxStock = Math.max(maxStock, prices[i]);
        maxProfit = Math.max(profit, maxProfit);
    }
    return maxProfit;
}