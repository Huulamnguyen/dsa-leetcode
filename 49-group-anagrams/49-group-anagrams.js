/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  
  let obj = {};
  
  for (let i of strs){
    let key = i.split("").sort().join('');
    if(!obj[key]){
      obj[key] = [i]
    } else {
      obj[key].push(i)
    }
  }
  
  console.log(obj)
  return Object.values(obj)
}