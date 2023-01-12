/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	nums.sort((a, b) => a - b);
	console.log(nums)
	const hash = {};
	const result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			let l = j + 1;
			let r = nums.length - 1;
			while(l < r) {
				const currSum = nums[i] + nums[j] + nums[l] + nums[r];
				if (currSum > target) {
					r--;
				}
				if (currSum < target) {
					l++;
				}
				if (currSum === target) {
					const hashKey = '' + nums[i] + nums[j] + nums[l] + nums[r];
					if (!hash[hashKey]) {
						result.push([nums[i], nums[j], nums[l], nums[r]]);
						hash[hashKey] = true;
					}
					l++;
					r--;
				}
			}
		}
	}
	console.log(result);
	return result;
};
fourSum([1,0,-1,0,-2,2], 0)