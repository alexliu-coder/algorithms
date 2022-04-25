/**
 * @param {character[][]} board
 * @return {boolean}
 */
let isValidSudoku = function(board) {
	let colums = [];
	let matrix = [];
	for (let i = 0; i < 9; i++) {
		colums.push([]);
	}
	function add(r, c, value) {
		colums[c].push(value);
		let x;
		let y;
		if (c <= 2) {
			x = 1;
		} else if (c <= 5) {
			x = 2
		} else {
			x = 3
		}

		if (r <= 2) {
			y = 1;
		} else if (r <= 5) {
			y = 2
		} else {
			y = 3
		}
		if (matrix[`mat${x}${y}`]) {
			matrix[`mat${x}${y}`].push(value)
		} else {
			matrix[`mat${x}${y}`] = [];
			matrix[`mat${x}${y}`].push(value)
		}
	}
  for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			add(r, c, board[r][c])
		}
	}
	let matrixArray = Object.values(matrix);

	function validateSingleArray(arr) {
		let temp = [];
		let result = true
		for (let i = 0; i < arr.length; i++) {
			if (temp.includes(arr[i]) && arr[i] !== '.') {
				result = false;
				break;
			}
			temp.push(arr[i]);
		}
		return result;
	}
	let ans = true;
	for (let i = 0; i < 9; i++) {
		const rowRes = validateSingleArray(board[i]);
		const columsRes = validateSingleArray(colums[i]);
		const matrixArrayRes = validateSingleArray(matrixArray[i]);
		if (!rowRes || !columsRes || !matrixArrayRes) {
			ans = false;
			break
		}
	}
	return ans
};

const falseBoard = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


const res = isValidSudoku(falseBoard)
console.log(res);