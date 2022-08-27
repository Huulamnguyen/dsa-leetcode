/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    
    s = Array.from(s)
    t = Array.from(t)
    
    let i = 0
    
    while(s[i]){
        if (s[0] === "#") s.shift()
        else if (s[i] === "#"){
            s.splice(i-1,2);
            i--;
        }else{
            i++;
        }
    }
    
    i = 0;
    
    while(t[i]){
        if(t[0] === "#") t.shift()
        else if (t[i] === "#"){
            t.splice(i-1,2);
            i--;
        }else{
            i++;
        }
    }
    
    // console.log(s.join(''))
    // console.log(t.join(''))
    
    
    return true ? s.join('') === t.join('') : false
    
};