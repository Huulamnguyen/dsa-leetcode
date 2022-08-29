class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
         
            def dfs(grid, r, c):
                if r < 0 or c < 0 or r >= len(grid) or c >= len(grid[0]) or grid[r][c] != "1": 
                    return
                    
                grid[r][c] = "#"
                dfs(grid, r-1, c)
                dfs(grid, r+1, c)
                dfs(grid, r, c-1)
                dfs(grid, r, c+1)
        
            count = 0
            if not grid:
                return 0
            for r in range(len(grid)):
                for c in range(len(grid[0])):
                    if grid[r][c] == "1":
                        dfs(grid, r, c)
                        count += 1
                        
            return count
    
        
        
        