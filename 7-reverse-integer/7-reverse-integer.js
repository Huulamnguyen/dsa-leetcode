/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    const number = Math.abs(x).toString().split('').reverse().join('')
    
    if (number > 2**31){
        return 0
    }
    
    return x < 0 ? -number : number
    
};