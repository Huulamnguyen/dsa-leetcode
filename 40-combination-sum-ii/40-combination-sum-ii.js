/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    const res = []
    
    candidates.sort((a,b) => a - b)
    
    function helper(temp, tar, start){
        if(tar < 0) return;
        if(tar === 0){
            res.push(temp)
            return
        }
        
        for(let i=start; i<candidates.length; i++){
            if(i!==start && candidates[i] === candidates[i-1]) continue
            helper([...temp, candidates[i]], tar - candidates[i], i+1 )
        }
    }
     helper([], target, 0)
    return res
    
};