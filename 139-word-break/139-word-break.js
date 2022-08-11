/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  
  const obj = new Set(wordDict)
  const ht = {}
  
  function inTheDict(string){
    if( string == "" || obj.has(string) ) return true
    if( ht[string] !== undefined ) return ht[string]
    
    let temp = ""
    for(let i = 0; i < string.length; i++){
      temp += string[i]
      if(obj.has(temp)){
        if(inTheDict(string.slice(i+1))){
          ht[string] = true
          return true
        }
      }
    }
    
    ht[string] = false
    return false
    
  }
  
  return inTheDict(s)
  
};