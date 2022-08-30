class Solution:
    def twoSumLessThanK(self, nums: List[int], k: int) -> int:
        
        nums.sort()
        l = 0
        r = len(nums) - 1
        maxSum = 0
        
        while(l < r):
            currSum = nums[l] + nums[r]
            if currSum < k:
                if maxSum < currSum:
                    maxSum = currSum
                l += 1
            else:
                    r -= 1
        return maxSum if maxSum else -1
            