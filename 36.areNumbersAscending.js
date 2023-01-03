/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function(s) {
	function isNumber(str) {
		return !isNaN(Number(str))
	}
	const tokens = s.split(' ');
	const result = [];
	for (let i = 0; i < tokens.length; i++) {
		if (isNumber(tokens[i])) {
			if (result.length === 0) {
				result.push(Number(tokens[i]))
			} else {
				if (tokens[i] > result[result.length -1]) {
					result.push(Number(tokens[i]))
				} else {
					return false
				}
			}
		}
	}
	return true
};

let s = "sunset is at 7 49 pm overnight lows will be in the low 50 and 60 s"
const res = areNumbersAscending(s)
console.log(res);