/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  
  if(needle==="") return 0;
  
  if(haystack.includes(needle)){
    return haystack.indexOf(needle)
  }
  
  return -1
};