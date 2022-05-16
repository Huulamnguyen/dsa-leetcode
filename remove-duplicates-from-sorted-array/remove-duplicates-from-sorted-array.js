/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
        if(nums.length == 0){
        return 0;
    }
    
    let insertIndex = 1;
    
    for (let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i-1]){
            nums[insertIndex] = nums[i];
            insertIndex++;
        }
    }
    return insertIndex;
};