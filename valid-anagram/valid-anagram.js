/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  
  const ht = {};
  
  if(s.length !== t.length){
    return false;
  }
  
  for(let i = 0; i < s.length; i++){
    const letter = s[i]
    if(!ht[letter]){
      ht[letter] = 1
    } else {
      ht[letter]++
    }
  }
  
  for(let i = 0; i < t.length;i++){
    const letter = t[i];
    if(!ht[letter]){
      return false
    } else {
      ht[letter]--
    }
  }
  
  return true
  
};