/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
	let rows = [];
	let colums = [];
	let blocks = {};
	for (let i = 0; i < 9; i++) {
		rows.push([])
		colums.push([]);
	}
	// 验证每一个值加入后是否破坏数独
	function validateSingleValue(r, c, value) {
		if (value !== '.' && rows[r].includes(value)) return false;
		if (value !== '.' && colums[c].includes(value)) return false;
		let x = Math.floor(r / 3);
		let y = Math.floor(c / 3);
		if (value !== '.' && blocks[`block${x}${y}`] && blocks[`block${x}${y}`].includes(value)) return false;
		
		rows[r].push(value);
		colums[c].push(value);
		!blocks[`block${x}${y}`] && (blocks[`block${x}${y}`] = []);
		blocks[`block${x}${y}`].push(value)
		return true;
	}
  for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			const res = validateSingleValue(r, c, board[r][c])
			if (!res) {
				return false;
			}
		}
	}
	return true;
};

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
	function solve(count) {
		if (!isValidSudoku(board)) return;
		if (count === 80) {
			console.log(JSON.parse(JSON.stringify(board)))
		}
		if (count >= 81) return;
		const x = Math.floor(count / 9);
		const y = count % 9;
		if (board[x][y] === '.') {
			for (let i = 1; i <= 9; i++) {
				board[x][y] = i + '';
				solve(count + 1)	
			}
		} else {
			solve(count + 1)
		}
	}
	solve(0)
};

const target = [
	["5","3",".",".","7",".",".",".","."],
	["6",".",".","1","9","5",".",".","."],
	[".","9","8",".",".",".",".","6","."],
	["8",".",".",".","6",".",".",".","3"],
	["4",".",".","8",".","3",".",".","1"],
	["7",".",".",".","2",".",".",".","6"],
	[".","6",".",".",".",".","2","8","."],
	[".",".",".","4","1","9",".",".","5"],
	[".",".",".",".","8",".",".","7","9"]
]

solveSudoku(target)
console.log(target)