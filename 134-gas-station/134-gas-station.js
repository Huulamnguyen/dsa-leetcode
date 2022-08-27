/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    const sumGas = gas.reduce((total, curr) => total + curr, 0)
    const sumCost = cost.reduce((total, curr) => total + curr, 0)
    
    if (sumGas < sumCost) return -1
    
    let total = 0, res = 0
    for (let i = 0; i < gas.length; i++){
        diff = gas[i] - cost[i]
        total += diff
        
        if (total < 0){
            total = 0
            res = i + 1
        }
    }
    return res
};