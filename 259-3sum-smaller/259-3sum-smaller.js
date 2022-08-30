/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumSmaller = function(nums, target) {
    
    nums.sort((a,b) => a - b)
    
    function twoSumSmaller(startIdx, target){
        let count = 0;
        let left = startIdx
        let right = nums.length - 1
        while(left < right){
            if(nums[left] + nums[right] < target){
                count += right - left
                left++;
            } else {
                right--;
            }
        }
        return count
    }
    
    let res = 0;
    for(let i = 0; i < nums.length; i++){
        res += twoSumSmaller(i+1, target - nums[i])
    }
    
    return res
    
};

