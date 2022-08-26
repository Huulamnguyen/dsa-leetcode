/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    
    if ( n === 1 ) return true
    
    let total = 1;
    let i = 1;
    
    let nTemp = n.toString().split('').sort((a,b) => a-b).join('')
    
    while (total.toString().length <= n.toString().length){
        
        total = Math.pow(2, i)
        let tTemp = total.toString().split('').sort((a,b) => a-b).join('')
        
        if (nTemp === tTemp) return true
        i++
    }
    return false
};