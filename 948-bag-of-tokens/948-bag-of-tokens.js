/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
    
    tokens.sort((a,b) => a-b)
    
    if(tokens.length === 0 || power < tokens[0]) return 0;
    let left = 0, right = tokens.length - 1, points = 0
    while(left <= right){
        if(power >= tokens[left]){
            points++;
            power -= tokens[left];
            left++;
        }else{
            if(right - left > 1){
                points--
                power += tokens[right]
                right--
            } else break;
        }
    }
    return points;
};