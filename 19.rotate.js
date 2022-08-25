/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
	let direction = [
		// right
		{
			x: 0,
			y: 1	
		},
		// down
		{
			x: 1,
			y: 0
		},
		// left
		{
			x: 0,
			y: -1
		},
		// up
		{
			x: -1,
			y: 0
		}
	];
	
	let currentDirectionIndex = 0;
	
	let m = matrix.length;
	let n = matrix[0].length;
	let total = m * n;
	let count = 0;
	let x = 0;
	let y = 0;
	
	let result = [];
	while (count < total) {
		console.log(result, x, y)
		result.push(matrix[x][y]);
		matrix[x][y] = "empty"
		let increment = direction[currentDirectionIndex % 4];
		if (!matrix[x + increment.x] || !matrix[x + increment.x][y + increment.y] || matrix[x + increment.x][y + increment.y] === "empty") {
			currentDirectionIndex += 1
		}
		increment = direction[currentDirectionIndex % 4];
		x += increment.x;
		y += increment.y;
		count++;
	}
	return result;
};

let test = [[1,2,3],[4,5,6],[7,8,9]];

console.log(spiralOrder(test));