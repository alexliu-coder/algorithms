/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	const zeroRow = [];
	const zeroColum = [];
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 0) {
				zeroRow.push(i);
				zeroColum.push(j);
			}
		}
	}
	for (let i = 0; i < matrix.length; i++) {
		if (zeroRow.includes(i)) {
			matrix[i] = new Array(matrix[i].length).fill(0);
		}
		for (let j = 0; j < matrix[i].length; j++) {
			if (zeroColum.includes(j)) {
				matrix[i][j] = 0;
			}
		}
	}
};