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

const falseBoard = 
[
	[".",".","4",".",".",".","6","3","."],
	[".",".",".",".",".",".",".",".","."],
	["5",".",".",".",".",".",".","9","."],
	[".",".",".","5","6",".",".",".","."],
	["4",".","3",".",".",".",".",".","1"],
	[".",".",".","7",".",".",".",".","."],
	[".",".",".","5",".",".",".",".","."],
	[".",".",".",".",".",".",".",".","."],
	[".",".",".",".",".",".",".",".","."]
]


const res = isValidSudoku(falseBoard)
console.log(res);