/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    function validPalindrome(s, i, j){
        while(i<j){
            if(s.charAt(i) !== s.charAt(j)) return false
            i++
            j--
        }
        return true
    }
    
    let i = 0, j = s.length - 1
    while(i<j){
        if(s.charAt(i) !== s.charAt(j)) {
            return (validPalindrome(s, i, j-1) || validPalindrome(s, i+1, j))
        }
        i++
        j--
    }
    
    return true
    
};