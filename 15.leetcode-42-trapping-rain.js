/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
	const sortHeight = [...height].sort((a, b) => a - b);
	// 获取当前行的数量
	function getCurrentLine(currHeight, height) {
		let pre = -1;
		let result = 0
		for (let i = 0; i < height.length; i++) {
			if (height[i] >= currHeight) {
				if (pre !== -1 && i - pre > 1) {
					result += (i - pre - 1)
				}
				pre = i
			}
		}
		return result
	}
	let base = sortHeight[0];
	let total = 0;
	for (let i = 0; i < sortHeight.length; i++) {
		// 按照高度的阶梯来遍历
		if(sortHeight[i - 1] && sortHeight[i] === sortHeight[i - 1]) continue;
		if(sortHeight[i] === 0) continue;

		const currentLineTotal = getCurrentLine(sortHeight[i], height);
		if (currentLineTotal) {
			total += currentLineTotal * (sortHeight[i] - base)
		}
		base = sortHeight[i];
	}
	return total;
};

console.log(trap([0,7,1,4,6]));