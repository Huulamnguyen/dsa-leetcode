# Time: O(n)
# Space: 0(n)

# class Solution:
#     def highFive(self, items: List[List[int]]) -> List[List[int]]:
        
#         ht = {}
        
#         for item in items:
#           if item[0] in ht:
#             ht[item[0]] += [item[1]]
#             ht[item[0]].sort(reverse=True)
#           else:
#             ht[item[0]] = [item[1]]
#             ht[item[0]].sort(reverse=True)
        
#         # print(ht)
        
#         res = []
        
#         for obj in ht:
#           total_top_five = 0
#           for i in range(0, 5):
#             total_top_five += ht[obj][i]
            
#           res.append([obj, total_top_five // 5])
        
#         # sort the res array
#         if len(res) <= 1:
#           return res
        
#         if res[0][0] > res[1][0]:
#           [res[0], res[1]] = [res[1], res[0]]
        
#         return res

class Solution:
    def highFive(self, items: List[List[int]]) -> List[List[int]]:
        scores=defaultdict(list)
        for item in items:
            student,score=item
            scores[student].append(score)
        output=[]
        for student in scores:
            scores[student].sort()
            avg=int(sum(list(scores[student][-5:]))/5)
            output.append([student,avg])
        return sorted(output)

          