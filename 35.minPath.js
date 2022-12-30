/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
	let dp = Array(grid.length).fill(0).map(item => Array(grid[0].length).fill(0))
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (i === 0 && j === 0) {
				dp[i][j] = grid[i][j]
			} else {
				const up = dp[i - 1] && dp[i - 1][j];
				const isUp = up === 0 || up;
				const left = dp[i][j - 1];
				const isLeft = left === 0 || left;
				const minBase = isUp && isLeft ? Math.min(up, left) : isUp ? up : left;	
				dp[i][j] = minBase + grid[i][j];
			}
		}
	}
	return dp[grid.length - 1][grid[0].length - 1]
};
minPathSum([[0,0],[0,0]])