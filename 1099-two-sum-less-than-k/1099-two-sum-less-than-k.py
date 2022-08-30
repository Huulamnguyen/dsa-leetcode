class Solution:
    def twoSumLessThanK(self, nums: List[int], k: int) -> int:
        
        nums.sort()
        
        left = 0
        right = len(nums) - 1
        maxSum = 0
        
        while left < right:
            currSum = nums[left] + nums[right]
            if currSum < k:
                if maxSum < currSum:
                    maxSum = currSum
                left += 1
            else:
                right -= 1
        
        return maxSum if maxSum else -1