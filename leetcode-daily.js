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
	let aa = a.split('').reverse();
	let bb = b.split('').reverse();
	let len = Math.max(a.length, b.length);
	let pre = 0;
	let result = [];
	for (let i = 0; i < len; i++) {
		const an = aa[i] && Number(aa[i]) || 0;
		const bn = bb[i] && Number(bb[i]) || 0;
		result.push((an + bn + pre) % 2);
		if (an + bn + pre > 1) {
			pre = 1;
			if (i === len - 1) {
				result.push(1);
			}
		} else {
			pre = 0;
		}
	}
	return result.reverse().join("")
};
// console.log(addBinary("11", "1"));

/**
 * 2287. 重排字符形成目标字符串
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
	let dic = {};
	for (let i = 0; i < s.length; i++) {
		if (target.includes(s[i])) {
			dic[s[i]] && dic[s[i]]++ || (dic[s[i]] = 1)
		}
	}
	function getOne() {
		let flag = true
		for (let i = 0; i < target.length; i++) {
			dic[target[i]] && dic[target[i]]-- || (flag = false)
		}
		return flag;
	}
	let hasMore = true;
	let count = 0;
	while (hasMore) {
		if (getOne()) {
			count++
		} else {
			hasMore = false;
		}
	}
	return count
};

/**
 * 68. 文本左右对齐
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
	const result = [];
	let currentLine = [];
	for (let i = 0; i < words.length; i++) {
		console.log(currentLine, i);
		let currentLenth = currentLine.reduce((count, item) => item.length + count, 0);
		console.log(currentLenth);
		if (currentLenth === 0) {
			currentLine.push(words[i]);
			continue;
		}
		if (currentLenth + words[i].length + 1 <= maxWidth) {
			currentLine.push(" ");
			currentLine.push(words[i]);
		} else {
			i--;
			result.push([...currentLine]);
			currentLine = [];
		}
	}
	if (currentLine.length) {
		result.push([...currentLine])
	}

	result.forEach(item => {
		const currentLength = item.reduce((count, item) => item.length + count, 0);
		
	})
	console.log(result);
};

// fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)

/**
 * 70. 爬楼梯
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	if (n <= 2) return n;
	let dp = Array(n + 1)
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2];
	}
	return dp[n]
};

// console.log(climbStairs(9)); 

/**
 * 2293. 极大极小游戏
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
	if (nums.length === 1) return nums[0];
	let result = [];
	for (let i = 0; i < nums.length / 2; i++) {
		if (i % 2 === 0) {
			result.push(Math.min(nums[2 * i], nums[2 * i + 1]))
		} else {
			result.push(Math.max(nums[2 * i], nums[2 * i + 1]))
		}
	}
	return minMaxGame(result);
};
// const res = minMaxGame([1,3,5,2,4,8,2,2]);
// console.log(res);

/**
 * 1813. 句子相似性 III
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
	let s1 = sentence1.split(' ');
	let rs1 = sentence1.split(' ').reverse();
	let s2 = sentence2.split(' ');
	let rs2 = sentence2.split(' ').reverse();
	let i = 0;
	let j = 0;
	while (i < s1.length && i < s2.length && s1[i] === s2[i]) {
		i++;
	}
	while (j < rs1.length && j < rs2.length && rs1[j] === rs2[j]) {
		j++;
	}
	console.log(j, i);
	return j + i >= Math.min(s1.length, s2.length);
};

// let s1="Ogn WtWj HneS"
// let s2="Ogn WtWj HneS"

// const res = areSentencesSimilar(s1, s2);
// console.log(res);


/**
 * 71. Simplify Path
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
	const pathArr = path.split('/')
	let stack = [];
	for (let i = 0; i < pathArr.length; i++) {
		if (pathArr[i] === '..') {
			stack.pop();
			continue;
		}
		if (pathArr[i] === '.' || !pathArr[i]) {
			continue;
		}
		stack.push(pathArr[i]);
	}
	console.log(stack);
	stack = stack.filter(item => item);
	return `/${stack.join('/')}`
};

// const res = simplifyPath("/a//b////c/d//././/..")
// console.log(res);

