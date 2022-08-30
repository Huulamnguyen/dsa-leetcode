/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
    
    nums.sort((a,b) => a - b)
    
    let left = 0;
    let right = nums.length - 1
    let maxSum = 0
    
    while(left < right){
        let currSum = nums[left] + nums[right]
        if(currSum < k){
            if(maxSum < currSum) maxSum = currSum
            left++
        }else{
            right--
        }
    }
    
    return maxSum ? maxSum : -1
    
};