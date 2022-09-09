/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    const validChars = "0123456789qwertyuiopasdfghjklzxcvbnm"
    const res = []
    
    for(let char of s.toLowerCase()){
        if(validChars.includes(char)) res.push(char)
    }
    const string = res.join('')
    let i=0, j=string.length - 1
    while(i<j){
        if(string.charAt(i) !== string.charAt(j)) return false
        i++
        j--
    }
    
    return true
    
    
};