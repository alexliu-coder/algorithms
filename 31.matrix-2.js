/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
	const matrix = Array(n).fill('').map(item => Array(n).fill(''));
	const direction = [
		{
			incrementX: 1,
			incrementY: 0
		},
		{
			incrementX: 0,
			incrementY: 1
		},
		{
			incrementX: -1,
			incrementY: 0
		},
		{
			incrementX: 0,
			incrementY: -1
		}
	]
	let count = 0;
	let point = {
		x: 0,
		y: 0
	}
	console.log(matrix);
	function next(x, y, dire) {
		return {
			x: x + dire.incrementX,
			y: y + dire.incrementY
		}
	}
	for (let i = 1; i <= n * n; i++) {
			
	}
};
generateMatrix(3)