class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        sList = s.split(" ")
        res = []
        for e in sList:
            if e == "":
                continue
            else:
                res.append(e)
        return len(res[len(res) -1])
        