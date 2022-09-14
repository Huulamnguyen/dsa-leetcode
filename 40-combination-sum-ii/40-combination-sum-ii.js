/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    const res = [] // decalre empty array
    candidates.sort((a,b) => b-a) // sort candidates in decending order
    
    const helper = (rem, start, current) => {
        if (rem < 0) return;
        if (rem === 0) {
            res.push(current.slice())
            return;
        }
        
        for (let i=start; i<candidates.length; i++){
            if(i > start && candidates[i] === candidates[i-1]) continue;
            current.push(candidates[i])
            helper(rem-candidates[i], i+1, current.slice())
            current.pop()
        }
        
    }
    
    helper(target, 0, [])
    return res
    
};