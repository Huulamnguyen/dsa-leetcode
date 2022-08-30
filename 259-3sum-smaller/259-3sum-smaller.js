/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    
    nums.sort((a,b) => a - b)
    
    function twoSumSmaller(startIdx, target){
        let twoSumCount = 0
        let left = startIdx
        let right = nums.length - 1
        while(left < right){
            if(nums[right] + nums[left] < target){
                twoSumCount += right - left
                left++
            } else {
                right--
            }
        }
        return twoSumCount
    }
    
    let threeSumCount = 0
    for(let i = 0; i < nums.length - 2; i++){
        threeSumCount += twoSumSmaller(i+1, target - nums[i])
    }
    return threeSumCount
};