/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function(s, dictionary) {
    dictionary.sort();
    let max="";
    for(let i=0;i<dictionary.length;i++){
        let temp="";
        let start=0;
        for(let j=0;j<s.length;j++){
           if(s[j]===dictionary[i][start]) {
               temp+=s[j];
               start++;
           }
        }
        if(temp===dictionary[i]){
            if(temp.length>max.length){
                max=temp;
            }
        }
    }
    return max;
};