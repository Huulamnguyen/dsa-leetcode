/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const n = digits.length;
    
    //itergrate over the array start from the end
    for ( let i = n - 1; i >= 0; i--){
        
        
        if(digits[i] == 9){
            digits[i] = 0;
        } else {
            digits[i]++;
            return digits;
        }
    }
    
    return [1,...digits];
};