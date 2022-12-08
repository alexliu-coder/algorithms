/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if (n === 0) {
		return 1;
	}
	function mutiplePlus(base, prod, time) {
		if (time === 0) {
			return prod;
		}
		return mutiplePlus(base, prod * base, time - 1)
	}
	if (n > 0) {
		return mutiplePlus(x, 1, n);
	}
	function mutipleMinus(base, prod, time) {
		if (time === 0) {
			return prod;
		}
		return mutipleMinus(base, prod / base, time + 1)
	}
	if (n < 0) {
		return mutipleMinus(x, 1, n)
	}
};

console.log(myPow(2, -2));