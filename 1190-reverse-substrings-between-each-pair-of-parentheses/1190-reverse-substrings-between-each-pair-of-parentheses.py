class Solution:
    def reverseParentheses(self, s: str) -> str:
        
        temp = []
        stack = []
        
        for i in range(len(s)):
            if s[i] == ")":
                while stack and stack[-1] != "(":
                    temp.append(stack[-1])
                    stack.pop()
                stack.pop()
                
                for ch in temp:
                    stack.append(ch)
                
                temp = []
            else:
                stack.append(s[i])
        return "".join(stack)
                
        