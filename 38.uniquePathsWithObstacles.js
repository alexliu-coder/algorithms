/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
	const m = obstacleGrid.length;
	const n = obstacleGrid[0].length;
	const dp = obstacleGrid;
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (dp[i][j] === 1) {
				dp[i][j] = 0;
				continue
			}
			if (i === 0 && j === 0) {
				dp[i][j] = 1
			} else {
				const up = dp[i - 1] && dp[i - 1][j] || 0;
				const left = dp[i][j - 1] || 0;
				dp[i][j] = up + left
			}
		}
	}
	return dp[m - 1][n - 1]
};
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))