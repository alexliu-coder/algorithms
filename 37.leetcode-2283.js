/**
 * @param {string} num
 * @return {boolean}
 */
var digitCount = function(num) {
	let count = {}
	num.split('').forEach((l, i) => {
		console.log(i, typeof i);
		count[i] = 0
	})
	for (let i = 0; i < num.length; i++) {
		if (count[num[i]]) {
			count[num[i]]++;
		} else {
			count[num[i]] = 1;
		}
	}
	console.log(count)
	for (let i = 0; i < num.length; i++) {
		if (Number(num[i]) !== count[i]) return false;
	}
	return true;
};

const res = digitCount("0")
console.log(res);