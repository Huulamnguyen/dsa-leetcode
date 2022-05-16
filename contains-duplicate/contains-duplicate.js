/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    nums.sort((a,b) => b - a);
    for (i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[i-1]) return true;
    }
    return false;
};