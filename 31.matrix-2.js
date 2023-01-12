/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	const matrix = Array(n).fill(0).map(item => Array(n).fill(0));
	console.log(matrix);
	const direction = [
		{
			row: 0,
			colum: 1
		},
		{
			row: 1,
			colum: 0
		},
		{
			row: 0,
			colum: -1
		},
		{
			row: -1,
			colum: 0
		}
	]
	let directionCount = 0;
	let startPoint = {
		x: 0,
		y: 0
	}
	function next(end) {
		if (end) return;
		const nextPoint = { ...startPoint };
		nextPoint.x += direction[directionCount % 4].row;
		nextPoint.y += direction[directionCount % 4].colum;
		const { x, y } = nextPoint;
		if (matrix[x] === undefined || matrix[x][y] === undefined || matrix[x][y] !== 0) {
			directionCount++
			next();
		} else {
			startPoint = { ...nextPoint };
		}
	}
	for (let i = 1; i <= n * n; i++) {
		matrix[startPoint.x][startPoint.y] = i;
		next(i === n * n);
	}
	console.log(matrix);
	return matrix
};

generateMatrix(9)