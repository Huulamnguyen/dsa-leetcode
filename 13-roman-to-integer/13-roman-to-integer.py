class Solution:
    def romanToInt(self, s: str) -> int:
        
        rd = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        
        n = len(s)
        rt = 0
        for i in range(n):
            if  i==n-1 or rd[s[i]] >= rd[s[i+1]] :
                rt += rd[s[i]]
            else :
                rt -= rd[s[i]]
                
        return rt