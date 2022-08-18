/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const memo = new Map();
    
    const dfs = (i, j, remain) => {
	    // We need to make sure that s3 is fully formed AND that both s1 and s2
		// have been fully used
        if (!remain.length && i === s1.length && j === s2.length) return true;
		
		// Otherwise, if there are no more letters to pull from, s3 can never be formed
        if (i === s1.length && j === s2.length) return false;
        const key = i + '-' + j + '-' + remain;
        if (memo.has(key)) return memo.get(key);
        
		// At this point, we just check if either s1 or s2 can add the next letter
		// for s3 and try that path
        if (remain.startsWith(s1[i])) {
            if (dfs(i + 1, j, remain.slice(1))) return true;
        }
        if (remain.startsWith(s2[j])) {
            if (dfs(i, j + 1, remain.slice(1))) return true;
        }
        
        memo.set(key, false);
        return false;
    };
    
    return dfs(0, 0, s3);
};