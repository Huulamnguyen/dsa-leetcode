class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        
        def transpose(matrix):
            m = len(matrix)
            n = len(matrix[0])
            for r in range(m):
                for c in range(r + 1, n):
                    temp = matrix[c][r]
                    matrix[c][r] = matrix[r][c]
                    matrix[r][c] = temp
        
        def reverse(matrix):
            m = len(matrix)
            
            for r in range(m):
                for c in range(m // 2):
                    temp = matrix[r][c]
                    matrix[r][c] = matrix[r][m-c-1]
                    matrix[r][m-c-1] = temp
        
        transpose(matrix)
        reverse(matrix)
                    