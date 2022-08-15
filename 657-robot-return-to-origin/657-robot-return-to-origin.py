# class Solution:
#     def judgeCircle(self, moves: str) -> bool:
        
#         location = [0,0]
        
#         for step in moves:
#           match step:
#             case "L":
#               location[0] -= 1
#             case "R":
#               location[0] += 1
#             case "U":
#               location[1] += 1
#             case default:
#               location[1] -= 1
        
#         return True if location[0] == 0 and location[1] == 0 else False
      
class Solution:
    def judgeCircle(self, moves: str) -> bool:
      return moves.count("R") == moves.count("L") and moves.count("U") == moves.count("D")
  