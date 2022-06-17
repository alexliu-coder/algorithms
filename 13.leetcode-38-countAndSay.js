/**
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
	if (n === 1) return '1';
	return getDescribe(countAndSay(n - 1))
};

function getDescribe(string) {
	if (string.length === 1) return '11';
	let currStr = string[0];
	let currIdx = 0;
	let result = [];
	for (let i = 1; i < string.length; i++) {
		// 当前后不一致时，增加数量，变换当前数据
		if (string[i] !== string[i - 1]) {
			result.push(i - currIdx, currStr);
			currStr = string[i];
			currIdx = i;
		}
		// 结尾的情况特殊考虑
		if (i === string.length - 1) {
			result.push(i - currIdx + 1, currStr)
		}
	}
	return result.join('')
}