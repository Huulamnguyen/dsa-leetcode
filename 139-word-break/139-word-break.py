class Solution:
	def wordBreak(self, s: str, wordDict: List[str]) -> bool:
		#1d dp from last to the first,neetcode
		l=len(s)
		dp=[False]*(l+1) 
		dp[l]=True
		for i in range(l-1,-1,-1):
			for w in wordDict:
				if (i+len(w))<=l and s[i:i+len(w)]==w:
					dp[i]=dp[i+len(w)]
				if dp[i]:
					break

		return dp[0]