/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const results = [];
  // sort the nums array in acsending order
  nums.sort((a,b) => a-b);
  
  // interate through the nums array
  for(let i=0; i<nums.length; i++){
    if(i > 0 && nums[i] === nums[i-1]) continue;
    let left = i + 1, right = nums.length - 1;
    const target = 0 - nums[i]
    while(right > left){
      const sum = nums[left] + nums[right]
      if(sum > target){
        right--;
      } else if (sum < target){
        left++;
      } else {
        results.push([nums[i], nums[left], nums[right]])
        while(nums[left] === nums[left + 1]) left++;
        while(nums[right] === nums[right -1]) right--;
        left++;
        right--
      }
    }
  }
  return results;

};