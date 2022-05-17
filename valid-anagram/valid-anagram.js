/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArray = s.split('').sort().join('');
    const tArray = t.split('').sort().join('');
    
    return sArray == tArray && sArray.length == tArray.length ? true : false
};