class Solution:
    def firstUniqChar(self, s: str) -> int:
      
      ht = {}
      
      for letter in s:
        if letter in ht:
          ht[letter] += 1
        else:
          ht[letter] = 1
      
      for letter in s:
        if ht[letter] == 1:
          return s.index(letter)
        
      return -1
        