function binarySearch(nums, target, equal) {
	let l = 0;
	let r = nums.length - 1;
	let res = nums.length;
	while (l <= r) {
		let m = Math.floor((r + l) / 2);
		console.log(equal, m)
		if (nums[m] > target || (equal && nums[m] >= target)) {
			r = m - 1;
			res = m;
		} else {
			l = m + 1;
		}
	}
	return res;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var searchRange = function(nums, target) {

	let result = [-1, -1];
	let left = binarySearch(nums, target, true);
	let right = binarySearch(nums, target) - 1;
	if (left <= right && right < nums.length && nums[left] === target && nums[right] === target) {
		result = [left, right]
	}
	return result
};

const res = searchRange([5,7,7,8,8,10],8)
console.log(res);

