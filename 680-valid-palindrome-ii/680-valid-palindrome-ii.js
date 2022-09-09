/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    function checkPalidrome(s, i, j){
        while(i<j){
            if(s.charAt(i) !== s.charAt(j)) {
                return false
            }
            
            i++
            j--
        }
        return true
    }
    
    let i = 0
    let j = s.length - 1
    
    while(i < j){
        if(s.charAt(i) !== s.charAt(j)){
            return (checkPalidrome(s, i, j-1) || checkPalidrome(s, i+1, j))
        }
        i++
        j--
    }
    return true
};

