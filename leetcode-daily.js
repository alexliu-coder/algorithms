/**
 * 1807. 替换字符串中的括号内容
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
	let dic = {};
	knowledge.forEach(item => {
		dic[item[0]] = item[1];
	});
	const result = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			let start = i + 1;
			while(s[i] !== ')') {
				i++
			}
			const currKey = s.slice(start, i);
			result.push(dic[currKey] || '?')
		} else {
			result.push(s[i])
		}
	}
	return result.join("")
};

// const s = "(name)is(age)yearsold"
// const k = [["name","bob"],["age","two"]]
// const res = evaluate(s, k)
// console.log(res);

/**
 * 33. 搜索旋转排序数组
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
	let l = 0;
	let r = nums.length - 1;
	while(l <= r) {
		let m = Math.floor((l + r) / 2);
		if (nums[m] === target) return m;
		if (nums[m] >= nums[l]) {
			if (nums[l] <= target && target < nums[m]) {
				r = m - 1;
			} else {
				l = m + 1;
			}
		} else {
			if (nums[m] < target && target <= nums[r]) {
				l = m + 1;
			} else {
				r = m - 1;
			}
		}
	}
	return -1;
};

// const res = search([4,5,6,7,0,1,2], 0)
// console.log(res);
// [4,5,6,7,0,1,2][4,5,6,7,0,1,2]

/**
 * 67. 二进制求和
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	
};