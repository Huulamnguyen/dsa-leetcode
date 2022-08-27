class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        
        res1 = []
        
        for i in s:
            if i != "#":
                res1.append(i)
            else:
                if res1:
                    res1.pop()
        
        res2 = []
        for i in t:
            if i != "#":
                res2.append(i)
            else:
                if res2:
                    res2.pop()
        
        if "".join(res1) == "".join(res2):
            return True
        else:
            return False