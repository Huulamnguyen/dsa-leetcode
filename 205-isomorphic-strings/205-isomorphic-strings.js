/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
  
  if(s.length !== t.length) return false;
  
  let sDict = new Map()
  let tDict = new Map()
  
  for (let i = 0; i < s.length; i++){
    let sChar = s[i]
    let tChar = t[i]
    
    if(!sDict.has(sChar) && !tDict.has(tChar)){
      sDict.set(sChar, tChar)
      tDict.set(tChar, sChar)
    }
    
    if(sDict.get(sChar) !== tChar || tDict.get(tChar) !== sChar){
      return false
    }
  }
   return true
};