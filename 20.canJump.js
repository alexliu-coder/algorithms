/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	let reg = Array(nums.length).fill(0);
	let result = false;
	function jump(index) {
		console.log(index)
		if (index >= nums.length - 1) {
			return (result = true);
		}
		if (index + nums[index] >= nums.length - 1) {
			return (result = true);
		}

		if (nums[index] === 0) return;

		if (reg[index] === 1) return;
		reg[index] = 1;
		for (let i = nums[index]; i >= 1 ; i--) {
			if (index + i >= nums.length - 1) {
				return (result = true);
			}
			jump(index + i)
		}
	}
	jump(0)
	return result;
};

console.log(canJump([0]))



