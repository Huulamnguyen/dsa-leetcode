class Solution:
    def threeSumSmaller(self, nums: List[int], target: int) -> int:
        
        nums.sort()
        
        def twoSumSmaller(startIdx, target):
            twoSumCount = 0
            left = startIdx
            right = len(nums) - 1
            while left < right:
                if nums[right] + nums[left] < target:
                    twoSumCount += right - left
                    left += 1
                else:
                    right -= 1
            return twoSumCount
        
        threeSumCount = 0
        for i in range(len(nums) - 2):
            threeSumCount += twoSumSmaller(i + 1, target - nums[i])
         
        return threeSumCount
    
# Time: O(n^2)
# Space: O(1)