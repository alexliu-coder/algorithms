/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
	let result = [];
	const n = nums.length;
	function track(nums, combination) {
		if (combination.length === n) {
			result.push(combination);
			return;
		}
		for (let i = 0; i < nums.length; i++) {
			const curr = nums[i];
			const numsWithoutCurr = nums.filter((item, idx) => idx !== i); 
			track(numsWithoutCurr, [...combination, curr])
		}
	}
	track(nums, []);
	return result;
};