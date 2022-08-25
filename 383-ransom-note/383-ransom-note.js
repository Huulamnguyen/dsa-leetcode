/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    if (ransomNote === null || magazine === null || magazine.length < ransomNote.length){
        return false
    }
    
    const charMap = new Map()
    
    for (let char of magazine){
        charMap.set(char, charMap.get(char) ? charMap.get(char) + 1 : 1)
    }
    
    for (let char of ransomNote){
        if( !charMap.has(char) || charMap.get(char) === 0 ) {
            return false
        } else {
            charMap.set(char, charMap.get(char) ? charMap.get(char) - 1 : 0)
        }
        
    }
    
    return true

};