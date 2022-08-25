/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
	const n = matrix[0].length;
	const result = [];
	for (let i = 0; i < n; i++) {
		const line = [];
		for (let j = n - 1; j >=0; j--) {
			console.log(j, i);
			line.push(matrix[j][i]);
		}
		result.push(line);
	}
	return result;
};

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));