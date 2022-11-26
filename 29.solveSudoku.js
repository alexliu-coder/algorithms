/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	function isQueen(borad) {
		const len = borad.length;
		const column = {};
		const row = {};
		const diagonal1 = {};
		const diagonal2 = {};
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				if (borad[i][j] === 'Q') {
					if (column[j]) return false;
					if (row[i]) return false;
					const dia1 = i - j;
					if (diagonal1[dia1]) return false;
					const dia2 = i + j;
					if (diagonal2[dia2]) return false;
	
					diagonal1[dia2] = true;
					diagonal2[dia2] = true;
					column[j] = true;
					row[i] = true;
				}
			}
		}
		return true;
	}
	const result = []
	function backTrack(boradStr, count, queenCount) {
		const borad = boradStr.split(",");
		if (!isQueen(borad)) return;
		if (count === n * n - 1 && queenCount === n) {
			return result.push(boradStr)
		}
		if (count === n * n) return

		const x = Math.floor(count / n);
		const y = count % n;
		backTrack(borad.join(','), count + 1, queenCount)
		borad[x][y] = 'Q'
		backTrack(borad.join(','), count + 1, queenCount + 1)
	}
	const row = Array(n).fill('.').join('');
	const boradStr = Array(n).fill(row).join(',');
	console.log(boradStr)
	backTrack(boradStr, 0, 0);
	console.log(boradStr, result.join(','))
};


solveNQueens(3);

// const row = Array(3).fill('.').join('');
// const boradStr = Array(3).fill(row).join(',');
// console.log(boradStr)
// const borad = boradStr.split(",");
// console.log(borad);