/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    // Convert string to an array
    const stringArr = s.split('');
    
    // Create a hashmap
    const ht = {};
    
    for(let char of stringArr){
        if(!ht[char]){
            ht[char] = 1;
        }else{
            ht[char]++;
        }
    }
    
    for(let key of Object.keys(ht)){
        if(ht[key] === 1){
            return stringArr.indexOf(key)
        }
    }
    
    return -1;
    
    
};