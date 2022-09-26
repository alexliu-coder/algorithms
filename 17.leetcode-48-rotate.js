/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	let n = matrix.length;
	matrix.reverse();
	// 对角转换
	const start = {
		x: 0,
		y: 0
	}
	trans(start);
	function trans (start) {
		const { x, y } = start;
		if (x === n - 1) return;
		for (let i = y; i < n; i++) {
			const temp = matrix[x][i];
			matrix[x][i] = matrix[i][x];
			matrix[i][x] = temp;
		}
		trans({ x: x + 1, y: y + 1})
	}
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));