/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	const row = new Array(n).fill(0);
	const matrix = new Array(n).fill(row);
	console.log(matrix);
	const status = {
		0: {
			row: 0,
			colum: 1
		},
		1: {
			row: 1,
			colum: 0
		},
		2: {
			row: 0,
			colum: -1
		},
		3: {
			row: -1,
			colum: 0
		}
	}
	const endPoint = Math.ceil(n / 2) - 1;
	function oneRound(start, len, count) {
		if (start > endPoint) return;
		const currentRoundLength = (len - 1) * 4;
		const status = 0;
		const p = {
			row: start,
			colum: start
		}
		matrix[p.row][p.colum] = count;
		count++;
		
	}
};

generateMatrix(3)