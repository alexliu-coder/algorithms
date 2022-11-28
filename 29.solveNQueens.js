/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	function isQueen(borad, count) {
		const len = borad.length;
		const column = {};
		const row = {};
		const diagonal1 = {};
		const diagonal2 = {};
		let currentCount = 0;
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				if (currentCount > count) return true;
				if (borad[i][j] === 'Q') {
					if (column[j]) return false;
					if (row[i]) return false;
					const dia1 = i - j;
					if (diagonal1[dia1]) return false;
					const dia2 = i + j;
					if (diagonal2[dia2]) return false;
	
					diagonal1[dia1] = true;
					diagonal2[dia2] = true;
					column[j] = true;
					row[i] = true;
				}
				currentCount++;
			}
		}
		return true;
	}

	const result = []
	function backTrack(borad, count, queenCount) {
		if (!isQueen(borad, count)) return;
		if ((count === n * n || n == 1) && queenCount === n) {
			return result.push(borad.map(item => item.join('')) )
		}
		if (count === n * n) return
		const x = Math.floor(count / n);
		const y = count % n;
		borad[x][y] = 'Q'
		backTrack(borad, count + 1, queenCount + 1)
		borad[x][y] = '.'
		backTrack(borad, count + 1, queenCount)
	}
	// const row = Array(n).fill('.').join('');
	// const boradStr = Array(n).fill(row).join(',');
	const borad = Array(n).fill(0).map(item => Array(n).fill('.'))
	backTrack(borad, 0, 0);
	return result;
};


const res = solveNQueens(9);
// console.log(res.length);

// const row = Array(3).fill('.').join('');
// const boradStr = Array(3).fill(row).join(',');
// console.log(boradStr)
// const borad = boradStr.split(",");
// console.log(borad);

// const a = ['abc']
// // a[0][0] = 'q'
// const tar = a[0]
// tar[1] = 'q'
// a[0] = tar
// console.log(a)


// [
// 	["Q....","..Q..","....Q",".Q...","...Q."],
// 	["Q....","...Q.",".Q...","....Q","..Q.."],
// 	[".Q...","...Q.","Q....","..Q..","....Q"], //1
// 	[".Q...","....Q","..Q..","Q....","...Q."],
// 	["..Q..","Q....","...Q.",".Q...","....Q"], //1
// 	["..Q..","....Q",".Q...","...Q.","Q...."],
// 	["...Q.","Q....","..Q..","....Q",".Q..."],
// 	["...Q.",".Q...","....Q","..Q..","Q...."],
// 	["....Q",".Q...","...Q.","Q....","..Q.."],
// 	["....Q","..Q..","Q....","...Q.",".Q..."]
// ]

// [
// 	["....Q","..Q..","Q....","...Q.",".Q..."],
// 	["....Q",".Q...","...Q.","Q....","..Q.."],
// 	["...Q.",".Q...","....Q","..Q..","Q...."],
// 	["...Q.","Q....","..Q..","....Q",".Q..."],
// 	["..Q..","....Q",".Q...","...Q.","Q...."],
// 	[".Q...","....Q","..Q..","Q....","...Q."],
// 	["Q....","...Q.",".Q...","....Q","..Q.."],
// 	["Q....","..Q..","....Q",".Q...","...Q."]
// ]