class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = 0
        char_map = {} # -> store char
        max_length = 0
        
        for right in range(len(s)):
            
            # If char seen before and wihtin the current window, jump left pointer directly
            if s[right] in char_map and char_map[s[right]] >= left:
                left = char_map[s[right]] + 1

            char_map[s[right]] = right # Update char's most recent position
            max_length = max(max_length, right - left + 1) # Track max window size
        
        return max_length