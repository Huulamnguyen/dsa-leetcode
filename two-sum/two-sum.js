/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexArr = [];
    
    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if(target - nums[j] == nums[i]){
                indexArr.push(i,j)
                return indexArr
            }
        }
    }
};