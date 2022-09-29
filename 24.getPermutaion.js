/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
 var getPermutation = function(n, k) {
	let range = [];
	for (let i = 0; i < n; i++) {
		range.push(i + 1);
	}
	let result = [];
	function backTrack(rest, selection) {
		if (selection.length === n) {
			result.push(Number(selection))
			return;
		}
		for (let i = 0; i < rest.length; i++) {
			backTrack(rest.filter((item, idx) => i !== idx), selection + String(rest[i]))
		}
	}
	backTrack(range, "");
	console.log(result)
	return String(result.sort((a, b) => a - b)[k - 1]);
};

console.log(getPermutation(3, 3));