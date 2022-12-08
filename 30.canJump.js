/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let maxjump = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + i >= nums.length - 1) {
			return true;
		}
		maxjump = Math.max(maxjump - 1, nums[i])
		if (maxjump === 0) {
			return false;
		}
	}
	return true;
};

const can = canJump([4,3,2,1,0]);
console.log(can);