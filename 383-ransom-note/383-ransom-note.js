/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    if (ransomNote == null || magazine == null || magazine.length < ransomNote.length ) {
        return false
    }
    
    const hm = new Map()
    
    for (let char of magazine){
        hm.set(char, hm.get(char) ? hm.get(char) + 1 : 1)
    }
    
    for ( let char of ransomNote){
        if ( !hm.has(char) || hm.get(char) === 0){
            return false
        } else {
            hm.set(char, hm.get(char) ? hm.get(char) - 1: 0)
        }
    }
    
    return true
    
};