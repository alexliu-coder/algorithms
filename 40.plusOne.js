/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let curr = digits.length - 1;
	function next(i) {
		if (i === 0 && digits[i] + 1 > 9) {
			digits[i] = 0;
			return digits.unshift(1)
		}
		if (digits[i] + 1 > 9) {
			digits[i] = 0;
			next(i - 1)
		} else {
			digits[i] += 1
		}
	}
	next(curr)
	return digits;
};

plusOne([9,9,9])