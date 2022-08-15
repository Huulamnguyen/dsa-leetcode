class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        dat=dict()
        a=sorted(arr)
        i=0
        for x in a:
            n=bin(x).replace('0b','').count('1')
            try:
                dat[n] += [a[i]]
            except:
                dat[n] = [a[i]]
            i+=1
        re=[]
        for e in sorted(dat.keys()):
            re += dat[e]
            
        return re   