/*
function Profit(prices) {
    let profit
    let maxProfit = 0
    
    prices.forEach(function(buy, index) {
        let rest = prices.slice(index + 1)     
        if (rest){
          let sell = Math.max(...rest)      
            sell > buy ? profit = sell - buy : null
             profit > maxProfit ? maxProfit = profit : null    
      }     
    })  
     return maxProfit    
 }
 prices = [ 315, 50, 314, 684 ,100, 648, 132, 50, 98, 45 ]
 console.log(Profit(prices))
 */

 function Profit(prices) {
    let maxProfit = 0;
    let lowestPrice  = prices[0]
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(maxProfit, prices[i] - min)
    }
    return maxProfit;
}
prices = [ 315, 50, 314, 684 ,100, 648, 132, 50, 98, 45 ]
console.log(Profit(prices))