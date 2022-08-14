class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        pascal = [[1]]
        for row in range(1, numRows):
            pascal.append([])
            for col in range(row+1):
                if 0 < col < row:
                    num = pascal[row-1][col-1] + pascal[row-1][col]
                else: 
                    num = 1
                pascal[row].append(num)
        return pascal