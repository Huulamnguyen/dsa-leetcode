/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    
    nums.sort((a,b) => a - b)
    
    let start = 0
    let end = nums.length - 1
    let max = Number.MIN_SAFE_INTEGER;
    
    while(start < end){
        if (nums[start] + nums[end] < k){
            max = Math.max(max, nums[start] + nums[end])
            start++
        }else{
            end--
        }
    }
    
    return max === Number.MIN_SAFE_INTEGER ? -1 : max;
    
};