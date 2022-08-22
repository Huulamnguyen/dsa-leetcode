/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    
    let t = "", pre = ""
    let last = new Array()
    
    for (let c of s){
        switch(c){
            case '(':
                last.push(t)
                t = ""
                break
            case ")":
                pre = last.pop()
                t = pre.concat(t.split('').reverse().join(''))
                break
            default:
                t = t.concat(c)
                break
        }
    }
    
    return t
    
};