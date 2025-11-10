class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        nums_map = {}

        for i, num in enumerate(nums):
            remaining = target - num
            if remaining in nums_map:
                return [nums_map[remaining],i]
            nums_map[num] = i
        return []