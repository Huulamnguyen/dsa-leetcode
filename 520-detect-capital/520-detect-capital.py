class Solution:
    def detectCapitalUse(self, word: str) -> bool:
      # print(word.title())
      return word==word.upper() or word==word.lower() or word==word.title()