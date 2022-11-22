/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
	let result = [];
	function generate(str, l, r) {
		if (str.length >= 2 * n) {
			return result.push(str);
		}
		if (l < n) {
			generate(str + '(', l + 1, r);
		}
		if (l > r) {
			generate(str + ')', l, r + 1);
		}
	}
	generate('', 0, 0)
	return result;
};

