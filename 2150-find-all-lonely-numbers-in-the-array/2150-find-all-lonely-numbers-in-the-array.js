/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
//   const res = [];
//   const hash = {};

//   for (let i = 0; i < nums.length; i++) {
//     const temp = nums[i];
//     if (
//       !nums.includes(temp - 1) &&
//       !nums.includes(temp + 1) &&
//       !hash[temp]
//     ) {
//       hash[temp] = 1;
//     } else {
//       hash[temp]++;
//     }
//   }

//   for (const [key, value] of Object.entries(hash)) {
//     if (value === 1) {
//       res.push(parseInt(key, 10));
//     }
//   }
//   return res;
  
  const map = {}, ans = []
    for (let num of nums) {
        if (map[num]) map[num]++
        else map[num] = 1
    }

    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] == 1 && !map[nums[i]-1] && !map[nums[i]+1]) ans.push(nums[i])
    }
    
    return ans
};