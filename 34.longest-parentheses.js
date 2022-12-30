/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	const record = new Array(s.length).fill(0);
	let l = 0;
	let r = 0;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			l++
		} else {
			if (l > r) {
				
			}
		}
		
	}
};

console.log(longestValidParentheses("))))())()()(()"));