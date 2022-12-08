/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	let n = nums.length;
	let minStep = Infinity;
	function backTrack(index, count) {
		console.log(index, count);
		if (index === 0) {
			minStep = Math.min(minStep, count)
			return;
		}
		for (let i = index - 1; i >= 0; i--) {
			if (nums[i] + i >= index) {
				backTrack(i, count + 1)       
			}
		}
	}
	backTrack(n - 1, 0);
	return minStep;
};
const res = jump([2,9,6,5,7,0,7,2,7,9,3,2,2,5,7,8,1,6,6,6,3,5,2,2,6,3])
console.log(res);