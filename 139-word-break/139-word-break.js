/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
// var wordBreak = function(s, wordDict, memo={}) {
    
//   if (s in memo) return memo[s]
//   if(s === '') return true
  
//   for(let word of wordDict){
//     if(s.indexOf(word) === 0){
//       let suffix = s.slice(word.length);
//       if(wordBreak(suffix,wordDict,memo) === true){
//         memo[s] = true
//         return memo[s]
//       }
//     }
//   }
//   memo[s] = false
//   return memo[s]
// };

var wordBreak = function(s, wordDict){
  const table = new Array(s.length + 1).fill(false)
  table[0] = true
  
  for(let i=0; i<table.length; i++){
    if(table[i] === false) continue;
    for(let j=i+1; j<table.length; j++){
      if(wordDict.includes(s.slice(i,j))){
        table[j] = true
      }
    }
  }
  return table[table.length - 1]
}