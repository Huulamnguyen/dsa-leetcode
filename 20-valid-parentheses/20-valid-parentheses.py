class Solution:
    def isValid(self, s: str) -> bool:
        
        brackets = {
            '(':')',
            '{':'}',
            '[':']'
        }
        
        stack = []
        
        for char in s:
            if char in brackets:
                stack.append(char)
            elif (len(stack) > 0 and brackets[stack[len(stack) - 1]] == char):
                stack.pop()
            else:
                return False
        return len(stack) == 0