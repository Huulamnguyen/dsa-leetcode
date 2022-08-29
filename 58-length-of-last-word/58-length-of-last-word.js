/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let sArray = s.split(" ")
    
    const res = []
    
    for (let e of sArray){
        if (e === "") continue
        else (res.push(e))
    }
    
    return res[res.length - 1].length
};