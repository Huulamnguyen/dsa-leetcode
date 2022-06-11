/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    
  let peak;
  
  for (let i = nums.length - 1; i >= 0; i--){
    if(i === 0){
      peak = 0;
    }
    
    if(nums[i] > nums[i-1]){
      peak = i;
      break;
    }
  }
  
  for(let j = nums.length - 1; j >= 0; j--){
    if(nums[j] > nums[peak - 1]){
      let temp = nums[j];
      nums[j] = nums[peak - 1];
      nums[peak - 1] = temp;
      break;
    }
  }
  
  let start = peak, end = nums.length - 1;
  while(start < end){
    [ nums[start], nums[end] ] = [ nums[end],nums[start] ]
    start++;
    end--;
  }
  return nums;
};






