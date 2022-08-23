/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
//     nums.sort((a,b) => b - a)
//     for(let i=0; i < nums.length; i++){
//         if(i > 0 && nums[i] === nums[i-1]) return true
//     }
    
//     return false
    
    const ht = {}
    let res = false
    
    for (let num of nums){
        if (!ht[num]) ht[num] = 1
        else ht[num]++
    }
    
    for (let key in ht){
        if (ht[key] > 1) return res = true
    }
    
    return res
    
};