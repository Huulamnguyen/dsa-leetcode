/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0, right = height.length - 1;
  let maxSize = 0;
  while(left < right){
    const width = right - left;
    const heightLeft = height[left], heightRight = height[right];
    const size = width * Math.min(heightLeft, heightRight);
    maxSize = Math.max(maxSize, size);
    
    if (heightLeft <= heightRight){
      left++;
    } else {
      right--;
    }
  }
  return maxSize;
  
};