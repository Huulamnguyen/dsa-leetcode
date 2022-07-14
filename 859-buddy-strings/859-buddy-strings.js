/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {

  if(s.length !== goal.length) return false
  if(s === goal) return s.length > new Set(s).size
  
  const temp = [];
  for(let i = 0; i < goal.length; i++){
    if(s[i] !== goal[i]){
      temp.push(s[i], goal[i])
    }
  }
   return temp.length === 4 && temp[0] === temp[3] && temp[1] === temp[2];
  
};