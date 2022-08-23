/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    const romanDict = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000   
    }
    
    let total = 0

    for (let i = 0; i<s.length; i++){
        let current = romanDict[s[i]]
        let next = romanDict[s[i+1]]
        
        if(current < next){
            total += (next - current)
            i++
        } else {
            total += current
        }
    }
    
    return total
};