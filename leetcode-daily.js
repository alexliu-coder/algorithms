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

/**
 * TODO 72. Edit Distance
 * Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
	let len = Math.max(word1.length, word2.length);
	let w1 = word1.split('');
	let w2 = word2.split('');
	let dp = Array(len).fill(0);
	for (let i = 0; i < len; i++) {
		// if (!w1[i])
	}
};

/**
 * 1814. Count Nice Pairs in an Array
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function(nums) {
  function rev(num) {
		num = String(num).split('').reverse().join('');
		let result = [];
		for (let i = 0; i < num.length; i++) {
			if (result.length === 0 && Number(num[i]) === 0) continue;
			result.push(num[i]);
		}
		return Number(result.join(''));
	}
	let count = {};
	let max = -1;
	for (let i = 0; i < nums.length; i++) {
		const diff = nums[i] - rev(nums[i])
		if (count[diff] === undefined) {
			count[diff] = 1
		} else {
			count[diff]++
		}
		max = Math.max(count[diff], max)
	}
	console.log(count);
	return max;
};

// console.log(countNicePairs([13,10,35,24,76]));;

/**
 * 73. Set Matrix Zeroes
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	let n = matrix.length;
	let m = matrix[0].length;
	let zeroColumns = [];
	let zeroRows = [];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (matrix[i][j] === 0) {
				zeroColumns.push(j);
				zeroRows.push(i);
			}
		}
	}
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (zeroColumns.includes(j) || zeroRows.includes(i)) {
				matrix[i][j] = 0
			}
		}
	}
};

/**
 * 74. Search a 2D Matrix
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
	let range = matrix.map(row => row[0]);
	let l = 0;
	let r = range.length - 1;
	let row = range.length;
	while(l <= r) {
		console.log(l, r);
		let m = Math.floor((l + r) / 2);
		if (range[m] > target) {
			r = m - 1;
		}
		if (range[m] <= target) {
			l = m + 1
			row = m;
		}
	}
	console.log("row", row);
	if (row === range.length) {
		if (target < range[0]) return false;
		row = range.length - 1;
	}
	const second = matrix[row];
	console.log("second", second);
	let l2 = 0;
	let r2 = second.length - 1;
	while(l2 <= r2) {
		let m = Math.floor((l2 + r2) / 2);
		if (second[m] > target) {
			r2 = m - 1;
		}
		if (second[m] < target) {
			l2 = m + 1
		}
		if (second[m] === target) {
			return true;
		}
	}
	return false;
};

// const res = searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3)
// console.log(res);

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	let i = 0;
	while (i < nums.length) {
		let pre = i - 1;
		let curr = nums[i];
		while (pre >= 0 && nums[pre] > curr) {
			nums[pre + 1] = nums[pre];
			pre--; 
		}
		nums[pre + 1] = curr;
		i++;
	}
	console.log(nums);
};

// sortColors([4, 3, 2, 1])

/**
 * 35. Search Insert Position
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
	let l = 0;
	let r = nums.length - 1;
	let ans = nums.length;
	while (l <= r) {
		let m = Math.floor((l + r) / 2);
		if (nums[m] >= target) {
			r = m - 1;
			ans = m;
		}
		if (nums[m] < target) {
			l = m + 1;
		}
	}
	return ans;
};

// const res = searchInsert([1,3,5,6], 5)
// console.log(res);

/**
 * 1664. Ways to Make a Fair Array
 * TODO
 * @param {number[]} nums
 * @return {number}
 */
var waysToMakeFair = function(nums) {
	function getSum(digs) {
		return digs.reduce((pre, curr) => {
			return pre + curr
		},0)
	}
	const even = [];
	const odd = [];
	for (let i = 0; i < nums.length; i++) {
		if (i % 2 === 0) {
			even.push(nums[i])
		} else {
			odd.push(nums[i])
		}
	}
	let evenSum = getSum(even);
	let oddSum = getSum(odd);
	let diff = Math.abs(evenSum - oddSum);
	// let 	
};

/**
 * 2315. Count Asterisks
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
	const strs = s.split('|');
	const result = []
	for (let i = 0; i < strs.length; i++) {
		if (i % 2 === 0) {
			result.push(strs[i]);
		} else if (i === strs.length - 1) {
			result.push(strs[i]);
		} 
	}
	const tar = result.join('');
	let count = 0;
	for (let i = 0; i < tar.length; i++) {
		if (tar[i] === '*') count++
	}
	return count;
};

/**
 * 2319. Check if Matrix Is X-Matrix
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
	let n = grid.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (i === j) {
				if (grid[i][j] === 0) {
					console.log(i, j);
					return false;
				}
			} else if (i + j === n - 1 ) {
				if (grid[i][j] === 0) {
					console.log(i, j);
					return false;
				}
			} else {
				if (grid[i][j] !== 0) {
					console.log(i, j);
					return false;
				}
			}
		}
	}
	return true;
};

// checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]])

/**
 * 1233. 删除子文件夹
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
	const result  = [];
	for (let i = 0; i < folder.length; i++) {
		const curr = folder[i];
		const currArr = curr.split('/');
		currArr.pop();
		if (!folder.includes(currArr.join('/'))) {
			result.push(curr);
		}
	}
	return result;
};

// const res = removeSubfolders(["/a","/a/b","/c/d","/c/d/e","/c/f"])
// console.log(res);

/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
	const isFlush = suits.every(item => item === suits[0]);
	if (isFlush) return 'Flush';
	let dic = {};
	for (let i = 0; i < ranks.length; i++) {
		if (dic[ranks[i]]) {
			dic[ranks[i]]++;
		} else {
			dic[ranks[i]] = 1;
		}
	}
	const max =	Math.max(...Object.values(dic))
	if (max >= 3) return 'Three of a Kind';
	if (max === 2) return 'Pair';
	return 'High Card'
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function(nums) {
	const fsNums = [...nums]
	let fs = 0;
	for (let i = 1; i < fsNums.length; i++) {
		if (i % 2 === 1) {
			if (fsNums[i] <= fsNums[i - 1]) {
				fs += (fsNums[i - 1] - fsNums[i] + 1);
				fsNums[i - 1] = fsNums[i] - 1;
			}
		} else {
			if (fsNums[i] >= fsNums[i - 1]) {
				fs += (fsNums[i] - fsNums[i - 1] + 1);
				fsNums[i] = fsNums[i - 1] - 1;
			}
		}
	}
	console.log('fs', fs);

	let fb = 0;
	for (let i = 1; i < nums.length; i++) {
		if (i % 2 === 1) {
			if (nums[i] >= nums[i - 1]) {
				console.log(nums[i], nums[i - 1]);
				fb += (nums[i] - nums[i - 1] + 1);
				nums[i] = nums[i - 1] - 1;
			}
		} else {
			if (nums[i] <= nums[i - 1]) {
				fb += (nums[i - 1] - nums[i] + 1);
				nums[i - 1] = nums[i] - 1;
			}
		}
	}

	return Math.min(fs, fb);
};

// const res = movesToMakeZigzag([2,1,2])
// console.log(res);

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
  const map = new Map(items1);
	for (let i = 0; i < items2.length; i++) {
		if (map.has(items2[i][0])) {
			map.set(items2[i][0], map.get(items2[i][0]) + items2[i][1])
		} else {
			map.set(items2[i][0], items2[i][1])
		}
	}
	return [...map].sort((a, b) => a[0] - b[0])
};

/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
	let n = grid.length;
	const res = new Array(n - 2).fill(0).map(item => new Array(n - 2).fill(0));
	for (let i = 0; i < n - 2; i++) {
		for (let j = 0; j < n - 2; j++) {
			for (let x = i; x < i + 3; x++) {
				for (let y = j; y < j + 3; y++) {
					res[i][j] = Math.max(res[i][j], grid[x][y])
				}
			}
		}
	}
	return res
};

/**
 * @param {string[]} names
 * @return {string[]}
 */
var getFolderNames = function(names) {
	let dic = new Map();
	for (let i = 0; i < names.length; i++) {
		let name = names[i]
		if (!dic.has(name)) {
			dic.set(name, 1)
		} else {
			let k = dic.get(name);
			while (dic.has(name + `(${k})`)) {
				k++
			}
			names[i] += `(${k})`;
			dic.set(name, k + 1);
			dic.set(names[i], 1);
		}
	}
	return names;
};


// const ar = ["gta","gta(1)","gta","avalon"];
// const ar = ["kaido","kaido(1)","kaido","kaido(1)","kaido(2)"];
// const res = getFolderNames(ar)
// console.log(res);

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
	let m = grid.length;
	let n = grid[0].length;
	let dp = Array(m).fill(0).map(item => Array(n).fill(0));
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (i === 0 && j === 0) {
				dp[i][j] = grid[0][0];
				continue;
			}
			if (i === 0) {
				dp[i][j] = dp[i][j - 1] + grid[i][j];
			} else if (j === 0) {
				dp[i][j] = dp[i - 1][j] + grid[i][j];
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
			}
		}
	}
	return dp[m - 1][n - 1];
};

// const arr = [
// 	[1,4,8,6,2,2,1,7],
// 	[4,7,3,1,4,5,5,1],
// 	[8,8,2,1,1,8,0,1],
// 	[8,9,2,9,8,0,8,9],
// 	[5,7,5,7,1,8,5,5],
// 	[7,0,9,4,5,6,5,6],
// 	[4,9,9,7,9,1,9,0]
// ]
// const res = maxValue(arr);
// console.log(res);