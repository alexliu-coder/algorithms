/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	const record = Array(s.length).fill(0);
	const stack = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(i);
		} else {
			if (stack.length) {
				const leftIndex = stack.pop();
				record[leftIndex] = 1;
				record[i] = 1
			}
		}
	}
	let max = 0;
	const res = record.join("").split("0")
	res.forEach(item => {
		max = Math.max(max, item.length)
	})
	return max
};

console.log(longestValidParentheses("))))())()()(()"));