/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphaNumeric = '0123456789qwertyuiopasdfghjklzxcvbnm';
    const result = [];
    
    const sArray = s.split('');
    for (let char of sArray){
        if(alphaNumeric.includes(char.toLowerCase())){
            result.push(char.toLowerCase())
        }
    }
    
    return result.join('') == result.reverse().join('')
};