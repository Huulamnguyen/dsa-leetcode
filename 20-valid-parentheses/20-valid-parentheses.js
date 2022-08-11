/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
  const brackets ={
   '(':')',
   '{':'}', 
   '[':']'   
  }
  
  const stack = []
  
  for (char of s){
    if(brackets[char]) stack.push(char)
    else if(stack.length > 0 && brackets[stack[stack.length - 1]] === char) stack.pop()
    else return false
  }
  
  return stack.length === 0
  
};