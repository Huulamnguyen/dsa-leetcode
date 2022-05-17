/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNumeric = '0123456789qwertyuiopasdfghjklzxcvbnm';
    const result = [];

    for (let char of s.split('')){
        if(alphaNumeric.includes(char.toLowerCase())){
            result.push(char.toLowerCase())
        }
    }
    return result.join('') == result.reverse().join('')
};