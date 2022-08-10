/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(string) {
   const hashMapBrackets = {
      '(':')',
      '{':'}',
      '[':']'
    }
    
  const stack = [];
  
  for (let char of string){
    if(hashMapBrackets[char]){
      stack.push(char)
    } else if ( stack.length > 0 && hashMapBrackets[stack[stack.length - 1]] === char){
      stack.pop()
    } else {
      return false
    }
  }
  return stack.length === 0
    
};