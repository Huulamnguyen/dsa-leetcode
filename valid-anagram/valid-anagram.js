/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArray = s.split('').sort().join('');
    const tArray = t.split('').sort().join('');
    
    console.log(sArray)
    console.log(tArray)
    
    return sArray == tArray ? true : false
};