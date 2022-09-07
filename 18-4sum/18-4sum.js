/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 
 "- if nums.length < 4, return []
- sort nums
- Itergrate nums, nums.length - 3:
  - if i > 0 and nums[i] === nums[i-1], continue
  - if nums i+1. i+2, i+3, i+4  > target, break
  - itergrate j = i + 1 nums.length - 2
    - if j > i + 1 and nums[j] === nums[j-1], continue
      - left and right:
        - if sum nums i + j + left + right === target, add to res
        - else if sum <= target: while nums[left] = nums[++left]
        - else while nums[right] = nums[--right]
- return res"

 */
var fourSum = function (nums, target) {
    if (nums.length < 4) {
        return [];
    }

    nums.sort((a, b) => a - b);

    const res = [];

    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
    }

     if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
         break;
     }

     for (let j = i + 1; j < nums.length - 2; j++) {
         if (j > i + 1 && nums[j] === nums[j - 1]) {
             continue;   
         }
     
     let left = j + 1,
         right = nums.length - 1;
     while (left < right) {
         const sum = nums[i] + nums[j] + nums[left] + nums[right];
         if (sum === target) {
             res.push([nums[i], nums[j], nums[left], nums[right]]);
         }
         if (sum <= target) {
             while (nums[left] === nums[++left]);   
         } else {
             while (nums[right] === nums[--right]);  
         }
     }
 }
}
return res;
};