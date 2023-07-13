const fs = require('fs')
const path = require('path')
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
/**
 * 1807. 替换字符串中的括号内容
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  let dic = {};
  knowledge.forEach(item => {
    dic[item[0]] = item[1];
  });
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      let start = i + 1;
      while (s[i] !== ')') {
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
var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
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
var addBinary = function (a, b) {
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
var rearrangeCharacters = function (s, target) {
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
var fullJustify = function (words, maxWidth) {
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
var climbStairs = function (n) {
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
var minMaxGame = function (nums) {
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
var areSentencesSimilar = function (sentence1, sentence2) {
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
var simplifyPath = function (path) {
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
var minDistance = function (word1, word2) {
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
var countNicePairs = function (nums) {
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
var setZeroes = function (matrix) {
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
var searchMatrix = function (matrix, target) {
  let range = matrix.map(row => row[0]);
  let l = 0;
  let r = range.length - 1;
  let row = range.length;
  while (l <= r) {
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
  while (l2 <= r2) {
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
var sortColors = function (nums) {
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
var searchInsert = function (nums, target) {
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
var waysToMakeFair = function (nums) {
  function getSum(digs) {
    return digs.reduce((pre, curr) => {
      return pre + curr
    }, 0)
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
var countAsterisks = function (s) {
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
var checkXMatrix = function (grid) {
  let n = grid.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        if (grid[i][j] === 0) {
          console.log(i, j);
          return false;
        }
      } else if (i + j === n - 1) {
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
var removeSubfolders = function (folder) {
  const result = [];
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
var bestHand = function (ranks, suits) {
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
  const max = Math.max(...Object.values(dic))
  if (max >= 3) return 'Three of a Kind';
  if (max === 2) return 'Pair';
  return 'High Card'
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var movesToMakeZigzag = function (nums) {
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
var mergeSimilarItems = function (items1, items2) {
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
var largestLocal = function (grid) {
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
var getFolderNames = function (names) {
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
var maxValue = function (grid) {
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

/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let min = blocks.length;
  for (let i = 0; i < blocks.length - k + 1; i++) {
    let curr = 0;
    for (let j = i; j < i + k; j++) {
      if (blocks[j] === "W") {
        curr++
      }
    }
    min = Math.min(min, curr);
  }
  return min;
};

// let b = "BWWWBB"
// const res = minimumRecolors(b, 6)
// console.log(res);


/**
 * 自动机
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  const MAX_INT = Math.pow(2, 31) - 1;
  const MIN_INT = -Math.pow(2, 31)

  class Automation {
    constructor() {
      this.state = 'start';
      this.sign = 1;
      this.ans = 0;
    }

    getState(c) {
      const state = {
        'start': ['start', 'sign', 'in_number', 'end'],
        'sign': ['end', 'end', 'in_number', 'end'],
        'in_number': ['end', 'end', 'in_number', 'end'],
        'end': ['end', 'end', 'end', 'end']
      }
      let i;
      if (c === ' ') {
        i = 0;
      } else if (['-', '+'].includes(c)) {
        i = 1;
      } else if (!isNaN(Number(c))) {
        i = 2;
      } else {
        i = 3;
      }
      return state[this.state][i];
    }

    iterate(c) {
      const state = this.getState(c);
      this.state = state;
      if (state === 'sign') {
        this.sign = c === '+' ? 1 : -1;
      }
      if (state === 'in_number') {
        this.ans = this.ans * 10 + Number(c);
      }
    }

    getAns() {
      return this.sign === 1 ? Math.min(MAX_INT, this.ans) : Math.max(this.ans * -1, MIN_INT);
    }
  }

  const auto = new Automation();
  for (let i = 0; i < s.length; i++) {
    auto.iterate(s[i])
  }
  const res = auto.getAns()
  console.log(res)
  return res

};

//myAtoi('    words and 987')

/**
* @param {number[]} rowSum
* @param {number[]} colSum
* @return {number[][]}
*/
var restoreMatrix = function(rowSum, colSum) {
  const m = rowSum.length;
  const n = colSum.length;
  let matrix = Array(m).fill(0).map(item => Array(n).fill(0));
  let i = 0;
  let j = 0;
  while (i < m && j < n) {
    matrix[i][j] = Math.min(rowSum[i], colSum[j]);
    rowSum[i] -= matrix[i][j];
    colSum[j] -= matrix[i][j];
    if (rowSum[i] === 0) i++;
    if (colSum[j] === 0) j++;
  }
  return matrix;
};

//restoreMatrix([5,7,10], [8,6,8])

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  function getNode (val) {
    return {
      val,
      next: null
    }
  }
  let head = { val: 0, next: null }
  let current = head;
  while (l1 || l2) {
    let v1 = l1 && l1.val || 0;
    let v2 = l2 && l2.val || 0;
    let sum = v1 + v2 + current.val;
    l1 && (l1 = l1.next);
    l2 && (l2 = l2.next);
    current.val = sum % 10;

    const next = getNode(sum >= 10 && 1 || 0);
    if (!l1 && !l2 && next.val === 0) {
      break;
    }
    current.next = next;
    current = current.next;
  }
  return head;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let arr = [head];
  while (head.next) {
    head = head.next;
    arr.push(head);
  }
  if (n === arr.length) {
    return arr[1] || null; // 有可能只有一个长度
  }
  if (n === 1) {
    arr[arr.length - 2].next = null
    return arr[0];
  }
  arr[arr.length - n - 1].next = arr[arr.length - n + 1];
  return arr[0]
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} list1
* @param {ListNode} list2
* @return {ListNode}
*/
var mergeTwoLists = function(list1, list2) {
  const arr = [];
  function myPush (node) {
    if (arr.length === 0) {
      arr.push(node)
    } else {
      arr[arr.length - 1].next = node;
      arr.push(node)
    }
  }
  while (list1 && list2) {
    if (list1.val < list2.val) {
      myPush(list1);
      list1 = list1.next;
    } else {
      myPush(list2);
      list2 = list2.next;
    }
  }

  while (list1) {
    myPush(list1);
    list1 = list1.next;
  }

  while (list2) {
    myPush(list2);
    list2 = list2.next;
  }
  return arr.length && arr[0] || null;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode[]} lists
* @return {ListNode}
*/
var mergeKLists = function(lists) {
  var mergeTwoLists = function(list1, list2) {
    const arr = [];
    function myPush (node) {
      if (arr.length === 0) {
        arr.push(node)
      } else {
        arr[arr.length - 1].next = node;
        arr.push(node)
      }
    }
    while (list1 && list2) {
      if (list1.val < list2.val) {
        myPush(list1);
        list1 = list1.next;
      } else {
        myPush(list2);
        list2 = list2.next;
      }
    }

    while (list1) {
      myPush(list1);
      list1 = list1.next;
    }

    while (list2) {
      myPush(list2);
      list2 = list2.next;
    }
    return arr.length && arr[0] || null;
  };

  function mergeSort(lists) {
    if (lists.length === 0) return null;
    if (lists.length === 1) {
      return lists[0];
    }
    let m = Math.floor(lists.length / 2);
    let left = lists.slice(0, m);
    let right = lists.slice(m, lists.length);
    return mergeTwoLists(mergeSort(left), mergeSort(right))
  }
  return mergeSort(lists)
};

/**
* @param {number[]} nums
* @param {number[]} queries
* @return {number[]}
*/
var answerQueries = function(nums, queries) {
  const ans = Array(queries.length).fill(0);
  nums.sort((a, b) => a - b);
  for (let i = 0; i < queries.length; i++) {
    let currMax = queries[i];
    let total = 0;
    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] + total <= currMax) {
        total += nums[j];
        count++;
      }
    }
    ans[i] = count;
    console.log(i, count)
  }
  console.log(ans)
  return ans
};

//answerQueries([4,5,2,1], [3,10,21])


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} head
* @return {ListNode}
*/
var swapPairs = function(head) {
  let fakePoint = { val: 0 }
  fakePoint.next = head;
  let temp = fakePoint;
  while (temp.next && temp.next.next) {
    let node1 = temp.next;
    let node2 = temp.next.next;
    node1.next = node2.next;
    temp.next = node2;
    node2.next = node1;
    temp = node1;
  }
  return fakePoint.next
};

/**
* @param {string} a
* @param {string} b
* @return {boolean}
*/
var checkPalindromeFormation = function(a, b) {
  function isPali(str) {
    if (str.length < 2) return true;
    if (str.length % 2 === 1) {
      let m = Math.floor(str.length / 2);
      let l = m - 1;
      let r = m + 1;
      while (l >=0 && r <= str.length - 1) {
        if (str[l] !== str[r]) {
          return false;
        }
        l--;
        r++;
      }
      return true;
    } else {
      let ml = Math.floor(str.length / 2) - 1;
      let mr = Math.floor(str.length / 2);
      while (ml >= 0 && mr < str.length) {
        if (str[ml] !== str[mr]) {
          return false;
        }
        ml--;
        mr++;
      }
      return true;
    }
  }

  if (isPali(a) || isPali(b)) return true;

  function validate(str1, str2) {
    let l = 0;
    let r = str1.length - 1;
    while (str1[l] === str2[r] && r >= 0) {
      l++;
      r--;
    }
    if (l >= r) {
      return true;
    } else {

      return isPali(str1.slice(l, r + 1)) || isPali(str2.slice(l, r + 1));
    }
  }
  return validate(a, b) || validate(b, a);
};

//checkPalindromeFormation("abc", "cba")

/**
* @param {string} s
* @param {number} a
* @param {number} b
* @return {string}
*/
var findLexSmallestString = function(s, a, b) {
  function offset(s) {
    return s.slice(-b) + s.slice(0, -b)
  }

  function addAll(s) {
    let res = [...s];
    for (let i = 0; i < res.length; i++) {
      if (i % 2 === 1) {
        res[i] = (Number(res[i]) + a) % 10;
      }
    }
    return res.join('')
  }
  let set = new Set();
  let res = s;
  function dfs(s) {
    console.log(s)
    if (res > s) res = s
    if (set.has(s)) return;
    set.add(s);
    dfs(addAll(s));
    dfs(offset(s));
  }
  dfs(s)
  console.log(res);
  return res
};

//findLexSmallestString("5525", 9, 2)

/**
* @param {number} n
* @return {number}
* 超时啦
*/
var numDupDigitsAtMostN = function(n) {
  function isDup(num) {
    let s = String(num);
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (stack.includes(s[i])) {
        return true;
      } else {
        stack.push(s[i]);
      }
    }
    return false;
  }
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (isDup(i)) result++;
  }
  return result;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
var reverseKGroup = function(head, k) {
  function myReverse(head) {
    let pre = null;
    let curr = head;
    while (curr) {
      let nex = curr.next;
      curr.next = pre;
      pre = curr;
      curr = nex;
    }
    return pre
  }
  let hair = {val:0, next:head};
  let pre = hair;
  let end = hair;
  while (head) {
    for (let i = 0; i < k; i++) {
      end = end.next;
      if (!end) {
        return hair.next;
      }
    }
    const start = pre.next;
    const nex = end.next;
    end.next = null;
    pre.next = myReverse(start);
    start.next = nex;
    pre = start;
    end = start;
    head = nex;
  }
  return hair.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} head
* @return {ListNode}
*/
var reverseList = function(head) {
  let pre = null;
  let curr = head;
  while (curr) {
    let nex = curr.next;
    curr.next = pre;
    pre = curr;
    curr = nex;
  }
  return pre
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
var rotateRight = function(head, k) {
  if (!head || k === 0) return head;
  let length = 1;
  let end = head;
  while (end.next) {
    end = end.next;
    length++
  }
  end.next = head
  k = k % length;
  let rotate = length - k;
  let pre = end
  while (rotate > 0) {
    head = head.next;
    pre = pre.next;
    rotate--
  }
  pre.next = null;
  return head;
};

/**
* @param {number[]} scores
* @param {number[]} ages
* @return {number}
*/
var bestTeamScore = function(scores, ages) {
  let n = ages.length;
  let players = [];
  for (let i = 0; i < n; i++) {
    players.push({
      score: scores[i],
      age: ages[i]
    })
  }
  players.sort((a, b) => {
    if (a.score === b.score) {
      return a.age - b.age;
    }
    return a.score - b.score;
  });
  console.log(players, "p")
  let dp = Array(n).fill(0);
  let max = 0
  for (let i = 0; i < n; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (players[j].age <= players[i].age) {
        dp[i] = Math.max(dp[i], dp[j]);
      }
    }
    dp[i] += players[i].score;
    max = Math.max(dp[i], max);
  }
  console.log(dp)
  return max
};
// dp[i]=max{dp[j]}+people[i][0],j<i&people[j][1]≤people[i][1]
//bestTeamScore([5, 4,5,6,5, 2, 5], [10,2,1,2,1, 2, 2])

/**
* @param {string} s
* @param {string} t
* @return {number}
*/
var countSubstrings = function(s, t) {
  let ans = 0;
  const m = s.length;
  const n = t.length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let diff = 0;
      for (let k = 0; i + k < m && j + k < n; k++) {
        if (s[i + k] !== t[j + k]) {
          diff++
        };
        if (diff > 1) {
          break;
        }
        if (diff === 1) {
          ans++
        }
      }
    }
  }
  console.log(ans)
  return ans;
};
// countSubstrings('aba', 'baba')



/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
var camelMatch = function(queries, pattern) {
  const reg = /[A-Z]/;
  function validateSingle(tar, pattern) {

  }
};



//camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBa");


/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {

};

/**
 * @param {string} s
 * @return {string}
 */
var lastSubstring = function(s) {

};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const n = word1.length;
  const m = word2.length;
  let dp = Array(n + 1).fill(0).map(item => Array(m + 1).fill(0));
  for (let i = 0; i < n + 1; i++) {
    dp[i][0] = i
  }

  for (let j = 0; j < m + 1; j++) {
    dp[0][j] = j
  }

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      let left = dp[i - 1][j];
      let down = dp[i][j - 1];
      let down_left = dp[i - 1][j - 1];
      if (word1[i - 1] !== word2[j - 1]) {
        down_left++
      }
      dp[i][j] = Math.min(left + 1, down + 1, down_left);
    }
  }
  return dp[n][m]
};

/**
 * 76. 最小覆盖子串
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  function check(origin, target) {
    const strArr = origin.split('');
    for (let i = 0; i < target.length; i++) {
      const idx = strArr.indexOf(target[i]);
      if (idx > -1) {
        strArr.splice(idx, 1)
      } else {
        return false;
      }
    }
    return true;
  }

  let l = 0;
  let r = 0;
  let res = "";
  while (l < s.length) {
    let currStr = s.slice(l, r);
    if (check(currStr, t)) {
      console.log(currStr)
      if (res.length) {
        if (currStr.length < res.length) {
          res = currStr;
        }
      } else {
        res = currStr
      }
      l++;
    } else {
      if (r >= s.length) {
        l++
      } else {
        r++
      }
    }

  }
  console.log(res);
  return res;
};

//minWindow("cabwefgewcwaefgcf", "cae");


/**
* @param {string} s
* @param {string} t
* @return {string}
*/
var minWindow = function(s, t) {
  class Store {
    constructor(target) {
      const tar = {}
      for (let i = 0; i < target.length; i++) {
        if (!tar[target[i]]) {
          tar[target[i]] = 1;
        } else {
          tar[target[i]]++
        }
      }
      this.tar = tar;
      this.curr = {};
    }
    check() {
      for (const key in this.tar) {
        if (!this.curr[key]) return false;
        if (this.curr[key] < this.tar[key]) return false;
      }
      return true;
    }
    add(letter) {
      if (this.curr[letter]) {
        this.curr[letter]++;
      } else {
        this.curr[letter] = 1;
      }
    }
    minus(letter) {
      this.curr[letter]--;
    }
  }

  const store = new Store(t);
  let ans = [-1, -1]
  let l = 0;
  let r = 0;
  while (r <= s.length) {
    const res = store.check();
    if (res) {
      const ansLength = ans[1] - ans[0];
      if (ans[0] > -1) {
        if (r - l < ansLength) {
          ans = [l, r]
        }
      } else {
        ans = [l, r];
      }
      store.minus(s[l]);
      l++;
    } else {
      store.add(s[r])
      r++;
    }
  }
  console.log(ans, s.slice(ans[0], ans[1]))
  return s.slice(ans[0], ans[1])
};

//minWindow("cabwefgewcwaefgcf", "cae");

/**
* @param {number[]} nums
* @param {number} firstLen
* @param {number} secondLen
* @return {number}
*/
var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {
  function getSingle(nums, fl, sl) {
    let sumL = nums.slice(0, fl).reduce((acc, item) => acc + item, 0);
    let sumLMax = sumL;
    let sumR = nums.slice(fl, fl + sl).reduce((acc, item) => acc + item, 0);
    let res = sumLMax + sumR;
    for (let i = fl; i < nums.length - sl; i++) {
      let curr = nums[i];
      sumL = sumL + curr - nums[i - fl];
      sumLMax = Math.max(sumL, sumLMax);
      sumR = sumR - curr + nums[i + sl];
      res = Math.max(res, sumLMax + sumR);
    }

    return res;
  }
  return Math.max(getSingle(nums, firstLen, secondLen), getSingle(nums, secondLen, firstLen))
};


/**
* @param {number[][]} fruits
* @param {number} startPos
* @param {number} k
* @return {number}
*/
var maxTotalFruits = function(fruits, startPos, k) {
  let ans = 0;
  let sum = 0;
  let l = 0;
  for (let r = 0; r < fruits.length; r++) {
    const [rp, ra] = fruits[r];
    sum += ra;
    while(l <= r && rp - fruits[l][0] + Math.min(Math.abs(rp - startPos), Math.abs(fruits[l][0] - startPos)) > k) {
      sum -= fruits[l][1];
      l++;
    }
    ans = Math.max(ans, sum);
  }
  return ans
};

/**
* @param {number} n
* @param {number[][]} logs
* @return {number}
*/
var hardestWorker = function(n, logs) {
  let max = 0;
  let ans = '';
  for (let i = 0; i < logs.length; i++) {
    const hours = i === 0 ? logs[i][1] : logs[i][1] - logs[i - 1][1];
    if (hours === max) {
      ans = Math.min(ans, logs[i][0])
    }
    if (hours > max) {
      ans = logs[i][0];
      max = hours
    }
  }
  return ans
};

/**
* @param {number[]} time
* @return {number}
*/
var numPairsDivisibleBy60 = function(time) {
  let ans = 0;
  for (let i = 0; i < time.length; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) {
        ans++;
      }
    }
  }
  return ans;
};

/**
* @param {string} croakOfFrogs
* @return {number}
*/
var minNumberOfFrogs = function(croakOfFrogs) {

};

/**
* @param {string} time
* @return {number}
*/
var countTime = function(time) {
  let h = 0;
  if (time[0] === '?' && time[1] === '?') {
    h = 24;
  } else if (time[0] === '?') {
    if(Number(time[1]) < 4) {
      h = 3;
    } else {
      h = 2;
    }
  } else if (time[1] === '?') {
    if (Number(time[0]) < 2) {
      h = 10;
    } else {
      h = 4;
    }
  } else {
    h = 1;
  }

  let m = 0;
  if (time[3] === '?' && time[4] === '?') {
    m = 60;
  } else if (time[3] === '?') {
    m = 6;
  } else if (time[4] === '?') {
    m = 10;
  } else {
    m = 1
  }
  return m * h
};

/**
* @param {number} n
* @param {number} k
* @return {number[][]}
*/
var combine = function(n, k) {
  let ans = [];

  const arr = Array(n).fill(0).map((item, index) => index + 1);

  function backTrack(selection, p) {
    if (selection.length === k) {
      ans.push([...selection]);
      return;
    }
    if (p > arr.length - 1) return;
    for (let i = p; i < arr.length; i++) {
      backTrack([...selection, arr[i]], i + 1);
    }
  }
  backTrack([], 0)
  console.log(ans)
  return ans;
};

//combine(4, 2)

/**
* @param {number[]} nums
* @return {number[][]}
*/
var subsets = function(nums) {
  let ans = [];

  function backTrack(selection, p) {
    if (p === nums.length) {
      ans.push(selection);
      return;
    }
    backTrack([...selection], p + 1);
    backTrack([...selection, nums[p]], p + 1);
  }
  backTrack([], 0)
  return ans;
};

/**
* @param {string[][]} board
* @param {string} word
* @return {boolean}
*/
var exist = function(board, word) {
  let X = board.length;
  let Y = board[0].length;

  const drections = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1]
  ]
  const visited = new Array(X).fill(0).map(item => new Array(Y).fill(false))
  let res = false;
  function backTrack(x, y, k) {
    if (board[x][y] !== word.charAt(k)) {
      return false;
    }
    if (k >= word.length - 1) {
      return true;
    }
    visited[x][y] = true;
    let result = false
    for (let idx = 0; idx < 4; idx++) {
      const [incrX, incrY] = drections[idx];
      const newX = x + incrX;
      const newY = y + incrY;
      if (newX >= 0 && newX < X && newY >= 0 && newY < Y && !visited[newX][newY]) {
        const flag = backTrack(newX, newY, k + 1);
        if (flag) {
          result = true;
          break;
        }
      }
    }
    visited[x][y] = false;
    return result
  }
  for (let i = 0; i < X; i++) {
    for (let j = 0; j < Y; j++) {
      const flag = backTrack(i, j, 0)
      if (flag) {
        return true
      }
    }
  }
  console.log(res)
  return false
};

//exist([["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"],["A","A","A","A","A","A"]], "AAAAAAAAAAAAAAB")

/**
* @param {string} s
* @param {number} n
* @return {boolean}
*/
var queryString = function(s, n) {
  let res = true;
  for (let i = 1; i <= n; i++) {
    console.log(i.toString(2))
    if (!s.includes(String(i.toString(2)))) {
      res = false;
    }
  }
  console.log(res)
  return res
};
//queryString("0110", 4)

/**
* @param {number[]} arr1
* @param {number[]} arr2
* @return {number[]}
*/
var addNegabinary = function(arr1, arr2) {
  arr1.reverse();
  arr2.reverse();
  const n = Math.max(arr1.length, arr2.length);
  const res = [];
  const pre = 0;
  for (let i = 0; i < n; i++) {
    const c1 = i >= arr1.length ? 0 : arr1[i];
    const c2 = i >= arr2.length ? 0 : arr2[i];

  }
};

/**
* @param {string} tiles
* @return {number}
*/
var numTilePossibilities = function(tiles) {
  const ans = [];
  function backTrack(selection, rest) {
    if (rest.length === 0) {
      const str = selection.join('');
      str && !ans.includes(str) && ans.push(str);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      const curr = rest[i];
      const currRest = rest.filter((item, idx) => i !== idx);
      backTrack([...selection], currRest);
      backTrack([...selection, curr], currRest);
    }
  }

  backTrack([], tiles.split(''))
  return ans;
};

/**
* @param {number[]} values
* @param {number[]} labels
* @param {number} numWanted
* @param {number} useLimit
* @return {number}
*/
var largestValsFromLabels = function(values, labels, numWanted, useLimit) {
  const list = values.map((item, index) => ({ value: item, label: labels[index] }));
  list.sort((a, b) => b.value - a.value);

  const dic = {};
  let count = 0;
  let ans = 0;
  for (let i = 0; i < list.length; i++) {
    if (count >= numWanted) break;
    const curr = list[i];
    if (dic[curr.label] >= useLimit) continue;
    ans += curr.value;
    count++;
    dic[curr.label] && dic[curr.label]++ || (dic[curr.label] = 1);
  }
  console.log(list,dic, count,ans)
  return ans;
};

//largestValsFromLabels([2,6,1,2,6],[2,2,2,1,1],1,1);

/**
* @param {number} n
* @param {number[][]} edges
* @param {number} t
* @param {number} target
* @return {number}
*/
var frogPosition = function(n, edges, t, target) {
  let graph = Array(n + 1)
    .fill(0)
    .map(v => [])
  edges.forEach(edge => {
    let [from, to] = edge
    graph[from].push(to)
    graph[to].push(from)
  })

  console.log(graph);
};
//frogPosition(7, [[3,5],[2,4],[1,2],[1,3],[1,7],[2,6]], 2, 4)

//["adc","wzy","abc"]
/**
* @param {string[]} words
* @return {string}
*/
var oddString = function(words) {
  let dic = {};
  for (let i = 0; i < words.length; i++) {
    let curr = [];
    let word = words[i]
    for (let j = 1; j < word.length; j++) {
      curr.push(word[j].charCodeAt() - word[j - 1].charCodeAt())
    }
    let currStr = curr.toString();
    if (dic[currStr]) {
      dic[currStr].value++;
      dic[currStr].str = words[i];
    } else {
      dic[currStr] = {
        value: 1,
        str: words[i]
      }
    }
  }
  for (const key in dic) {
    if (dic[key].value === 1) return dic[key].str;
  }
  return ''
};

/**
* @param {number[]} nums
* @return {number}
*/
var removeDuplicates = function(nums) {
  let pre = null;
  let preCount = 0;
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (pre === curr) {
      if (preCount >= 2) {
        nums.splice(i, 1);
        i--;
      } else {
        preCount++
      }
    } else {
      pre = curr;
      preCount = 1;
    }
  }
  return nums.length
};


/**
* @param {number[][]} grid
* @return {number}
*/
var shortestPathBinaryMatrix = function(grid) {
  const n = grid.length;
  const dic = Array(n).fill(0).map(item => Array(n).fill(0));
  if (grid[0][0] === 1) return -1;
  dic[0][0] = 1;
  let queue = [[0, 0]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === n - 1 && y === n - 1) {
      return dic[x][y];
    }
    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        if (x + i < 0) continue;
        if (x + i >= n) continue;
        if (y + j < 0) continue;
        if (y + j >= n) continue;

        if (grid[x + i][y + j] === 1) continue;
        if (dic[x + i][y + j]) continue;
        dic[x + i][y + j] = dic[x][y] + 1;
        queue.push([x + i, y + j])
      }
    }
  }
  return -1;
};

//console.log(shortestPathBinaryMatrix([[0,1],[1,0]]))

/**
* @param {number[]} count
* @return {number[]}
*/
var sampleStats = function(count) {
  let min = -1;
  let max = 256;
  let totalValue = 0;
  let totalCount = 0;
  let list = [];
  let modeCount = -1;
  let mode = -1;

  for (let i = 0; i < count.length; i++) {
    if (count[i] && min === -1) {
      min = i;
    }
    if (count[i]) {
      max = i;
      totalValue += count[i] * i;
      totalCount += count[i];
      list.push({
        value: i,
        count: count[i]
      })
      if (count[i] > modeCount) {
        modeCount = count[i];
        mode = i;
      }
    }
  }
  console.log(list);
  let median;
  if (totalCount % 2) {
    let middle = (1 + totalCount) / 2;
    let acc = 0;
    for (let i = 0; i < list.length; i++) {
      acc += list[i].count;
      if (acc >= middle) {
        median = list[i].value;
        break;
      }
    }
  } else {
    let lM = totalCount / 2;
    let rM = lM + 1;
    let acc = 0;
    let lMedian = -1;
    let rMedian = -1;
    for (let i = 0; i < list.length; i++) {
      acc += list[i].count;
      if (acc >= lM && lMedian === -1) {
        lMedian = list[i].value;
      }
      if (acc >= rM) {
        rMedian = list[i].value;
        break;
      }
    }
    median = (lMedian + rMedian) / 2;
  }
  return [min, max, totalValue / totalCount, median, mode]

};

const count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

//sampleStats(count)

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
* @param {TreeNode} root
* @param {number[]} to_delete
* @return {TreeNode[]}
*/
var delNodes = function(root, to_delete) {
  let ans = [];
  if (!root) return ans;
  function recursive(node, parent) {
    if (!node) return;
    if (!parent && !to_delete.includes(node.val)) {
      ans.push(node);
    }
    if (to_delete.includes(node.val)) {
      if (parent) {
        parent.left === node && (parent.left = null);
        parent.right === node && (parent.right = null);
      }
      node.left && recursive(node.left, null);
      node.right && recursive(node.right, null);
    } else {
      node.left && recursive(node.left, node);
      node.right && recursive(node.right, node);
    }
  }

  recursive(root, null);
  return ans;
};

/**
* @param {number[]} price
* @param {number} k
* @return {number}
*/
var maximumTastiness = function(price, k) {
  price.sort((a, b) => a - b);
  let left = 0;
  let right = price[price.length - 1] - price[0];
  while (left < right) {
    let mid = Math.floor((left + right + 1) / 2);
    if (check(price, k, mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return left;

  function check(price, k, tastiness) {
    let cnt = 0;
    let pre = -Number.MAX_VALUE / 2;
    for (let i = 0; i < price.length; i++) {
      let curr = price[i];
      if (curr - pre >= tastiness) {
        cnt++;
        pre = curr;
      }
    }
    return cnt >= k
  }
};

//[1, 3, 5, 10, 50, 70, 71, 100]

/**
* @param {string[]} words
* @param {number[][]} queries
* @return {number[]}
*/
var vowelStrings = function(words, queries) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const dic = [];
  for (let i = 0; i < words.length; i++) {
    let curr = words[i];
    let v = vowel.includes(curr[0]) && vowel.includes(curr[curr.length - 1]);
    dic.push(v);
  }
  const ans = [];
  for (let i = 0; i < queries.length; i++) {
    let [l, r] = queries[i];
    let count = 0;
    for (let j = l; j <= r; j++) {
      if (dic[j]) count++;
    }
    ans.push(count);
  }
  return ans;
};

/**
* @param {string} text
* @return {number}
*/
var maxRepOpt1 = function(text) {
  const dic = new Map();
  for (let i = 0; i < text.length; i++) {
    dic.set(text[i], (dic.get[text[i]] || 0) + 1);
  }
  let res = 0;
  for (let i = 0; i < text.length; i++) {
    let j = i;
    if (j < text.length && text[i] === text[j]) {
      j++;
    }
    const currMax = dic.get(text[i]) > j - i ? j - i + 1 : j - i
    res = Math.max(res, currMax);
    console.log(res, i)

    let k = j + 1;
    if (k < text.length && text[k] === text[i]) {
      k++;
    }
    if (k >= text.length || k === j + 1) {
      continue;
    }
    const addtion = k - j + 1;
    console.log(k, addtion, j)
    res = Math.max(res, (j - i) + addtion)
    console.log(res, i)
  }
  return res;
};
//maxRepOpt1("ababa")

/**
* @param {number[]} nums
* @return {number[]}
*/
var applyOperations = function(nums) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] = nums[i] * 2;
      nums[i + 1] = 0;
    }
    nums[i] && ans.push(nums[i])
  }
  console.log(ans)
  let diff = nums.length - ans.length;
  const zero = Array(diff).fill(0);
  return [...ans, ...zero]
};

//applyOperations([0,1])

/**
* @param {number[][]} grid
* @return {number}
*/
var equalPairs = function(grid) {
  const rows = grid.map(row => row.join(','));
  let column = [];
  for (let i = 0; i < grid.length; i++) {
    let col = [];
    for (let j = 0; j < grid.length; j++) {
      col.push(grid[j][i]);
    }
    column.push(col.join(','));
  }

  let ans = 0;
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < column.length; j++) {
      if (rows[i] === column[j]) ans++;
    }
  }
  return ans;
};

/**
* @param {number[]} nums
* @return {number}
*/
var unequalTriplets = function(nums) {
  let n = nums.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          ans++
        }
      }
    }
  }
  return ans;
};

/**
* @param {number[]} flips
* @return {number}
*/
var numTimesAllBlue = function(flips) {
  let ans = 0;
  const origin = Array(flips.length).fill(0);
  for (let i = 0; i < flips.length; i++) {
    let currIdx = flips[i] - 1;
    origin[currIdx] = 1;
    let flag = true;
    for (let j = i; j >= 0; j--) {
      if (origin[j] === 0) {
        flag = false;
      }
    }
    flag && ans++;
  }
  return ans
};

//numTimesAllBlue([4,1,2,3])

/**
* @param {string} s
* @param {number[][]} queries
* @return {boolean[]}
*/
var canMakePaliQueries = function(s, queries) {
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    const [l, r, k] = queries[i];
    const isOdd = (r + 1 - l) % 2 === 1;
    let dic = [];
    for (let j = l; j <= r; j++) {
      const letter = s[j];
      const idx = dic.indexOf(letter);
      if (idx === -1) {
        dic.push(letter);
      } else {
        dic.splice(idx, 1);
      }
    }
    const oddLetter = dic.length;
    console.log(oddLetter, l, r);
    const compare = isOdd ? Math.floor((oddLetter - 1) / 2) : oddLetter / 2;
    ans.push(k >= compare);
  }
  return ans;
};

//canMakePaliQueries("abcda", [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]])

/**
* @param {string} s
* @param {number[][]} queries
* @return {boolean[]}
*/
var canMakePaliQueries = function(s, queries) {
  const count = Array(s.length + 1).fill(0);
  for (let i = 0; i < s.length; i++) {
    count[i + 1] = count[i] ^ (1 << (s[i].charCodeAt(0) - 'a'.charCodeAt(0)))
  }
  for (let i = 0; i < queries.length; i++) {
    const [l, r, k] = queries[i];
    let count = 0
  }
};

//canMakePaliQueries("abcda", [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]])

/**
* @param {number} radius
* @param {number} xCenter
* @param {number} yCenter
* @param {number} x1
* @param {number} y1
* @param {number} x2
* @param {number} y2
* @return {boolean}
*/
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
  let nearsetX;
  if (x1 >= xCenter) {
    nearsetX = x1;
  } else if (x1 < xCenter && xCenter < x2) {
    nearsetX = xCenter;
  } else {
    nearsetX = x2;
  }

  let nearestY;
  if (y1 >= yCenter) {
    nearestY = y1;
  } else if (y1 < yCenter && yCenter < y2) {
    nearestY = yCenter;
  } else {
    nearestY = y2;
  }

  return (nearsetX - xCenter) * (nearsetX - xCenter) + (nearestY - yCenter) * (nearestY - yCenter) <= radius * radius;
};

function getGcd(a, b) {
  let big = Math.max(a, b);
  let small = Math.min(a, b);
  let r = big % small;
  if (r === 0) {
    return small;
  }
  return getGcd(small, r);
}

/**
* @param {number[]} nums
* @return {number}
*/
var countBeautifulPairs = function(nums) {

  function getGcd(a, b) {
    let big = Math.max(a, b);
    let small = Math.min(a, b);
    let r = big % small;
    if (r === 0) {
      return small;
    }
    return getGcd(small, r);
  }
  let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let l = String(nums[i])[0];
      let r = String(nums[j])[String(nums[j]).length - 1];
      if (getGcd(l, r) === 1) {
        ans++;
      }
    }
  }
  return ans
};

/**
* @param {number[]} arr
* @return {number}
*/
var maximumSum = function(arr) {
  let all = arr[0];
  let allM1 = 0;
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    allM1 = Math.max(allM1 + arr[i], all);
    all = Math.max(all, 0) + arr[i];
    res = Math.max(res, allM1, all);
  }
  return res
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  const arr1 = [];
  while (l1) {
    arr1.push(l1);
    l1 = l1.next;
  }
  const arr2 = [];
  while (l2) {
    arr2.push(l2);
    l2 = l2.next;
  }

  let plusOne = 0;
  const ans = [];
  while (arr1.length || arr2.length) {
    const val1 = arr1.length && arr1.pop().val || 0;
    const val2 = arr2.length && arr2.pop().val || 0;
    const sum = val1 + val2 + plusOne;
    plusOne = 0;
    if (sum > 9) {
      plusOne = 1;
    }
    const currNode = new ListNode(sum % 10, ans[0])
    ans.unshift(currNode);
  }
  if (plusOne) {
    const currNode = new ListNode(1, ans[0])
    ans.unshift(currNode);
  }
  return ans[0]
};

/**
* @param {number[][]} nums
* @return {number}
*/
var matrixSum = function(nums) {
  let ans = 0;
  nums.forEach(item => item.sort((a, b) => a - b));
  nums.sort((a, b) => b.length - a.length);
  while (nums[0].length) {
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
      const big = nums[i].shift();
      big && (curr = Math.max(curr, big));
    }
    ans += curr;
  }
  return ans
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
  let head = {
    val: 0
  }
  let currentNode = head;
  let plusOne = 0;
  while (l1 || l2) {
    const val1 = l1 && l1.val || 0;
    l1 && (l1 = l1.next);
    const val2 = l2 && l2.val || 0;
    l2 && (l2 = l2.next);
    const sum = val1 + val2 + plusOne;
    plusOne = 0;
    if (sum > 9) {
      plusOne = 1;
    }
    currentNode.next = new ListNode(sum % 10)
    currentNode = currentNode.next;
  }
  if (plusOne) {
    currentNode.next = new ListNode(1)
  }
  return head.next
};

/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
var twoSum = function(nums, target) {
  let dic = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (dic.has(diff)) {
      return [dic.get(diff), i]
    }
    dic.set(nums[i], i);
  }
  return [-1, -1]
};

/**
* @param {number} finalSum
* @return {number[]}
*/
var maximumEvenSplit = function(finalSum) {
  if (finalSum % 2 === 1) {
    return [];
  }
  let ans = [];
  for (let i = 2; i <= finalSum; i += 2) {
    ans.push(i);
    finalSum -= i;
  }
  ans[ans.length - 1] += finalSum;
  return ans;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {
  if (!head) {
    return head
  }
  let top = new ListNode(0, head);
  let curr = top;
  while (curr.next && curr.next.next) {
    let start = curr.next;
    let end = curr.next.next;
    if (start.val !== end.val) {
      curr = curr.next
    } else {
      while (start.val === end.val) {
        start = start.next;
        end = end.next
      }
      curr.next = end;
    }
  }
  return top.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
* @param {ListNode} head
* @return {ListNode}
*/
var deleteDuplicates = function(head) {
  let curr = head;
  while (curr) {
    let end = curr.next;
    if (end && curr.val === end.val) {
      end = end.next;
    }
    curr.next = end;
  }
  return head
};


/**
* @param {number[]} heights
* @return {number}
*/
var largestRectangleArea = function(heights) {

};

/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let ans = Infinity;
  let difference = Infinity;
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      const twoSum = nums[l] + nums[r];
      if (Math.abs(target - (nums[i] + twoSum)) < difference) {

        difference = Math.abs(target - (nums[i] + twoSum))
        ans = nums[i] + twoSum
      }
      if (twoSum > diff) {
        r--;
      } else if (twoSum < diff) {
        l++;
      } else {
        return twoSum + nums[i]
      }
    }
  }
  return ans
};

//threeSumClosest([1,1,1,0], -100);

/**
* @param {number[]} nums
* @return {number}
*/
//var maxAlternatingSum = function(nums) {
//  let ans = 0;
//  function backTrack(total, count, i) {
//    if (i >= nums.length) return;
//    backTrack(total, count, i + 1);
//    let newTotal = total;
//    if (count % 2 === 0) {
//      newTotal += nums[i];
//    } else {
//      newTotal -= nums[i];
//    }
//    ans = Math.max(ans, newTotal);
//    backTrack(newTotal, count + 1, i + 1);
//  }
//  backTrack(0, 0, 0)
//  return ans
//};

var maxAlternatingSum = function(nums) {
  let odd = nums[0];
  let even = 0;
  for (let i = 1; i < nums.length; i++) {
    let _odd = odd;
    let _even = even;
    odd = Math.max(_odd, _even + nums[i]);
    even = Math.max(_odd - nums[i], _even);
  }
  return Math.max(odd, even);
};

/**
* @param {number} n
* @return {number}
*/
var alternateDigitSum = function(n) {
  let str = String(n);
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    const s = str[i]
    if (i % 2 === 0) {
      ans += Number(s)
    } else {
      ans -= Number(s)
    }
  }
  return ans
};

/**
* @param {number[]} nums
* @return {number}
*/
var rob = function(nums) {
  let choose = nums[0];
  let no = 0;
  for (let i = 1; i < nums.length; i++) {
    let _choose = choose;
    let _no = no;
    choose = _no + nums[i];
    no = Math.max(_no, _choose)
  }
  return Math.max(choose, no)
};

/**
* @param {number} x
* @return {number}
*/
var mySqrt = function(x) {
  let ans = 0;
  let l = 0;
  let r = x;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (mid * mid >= x) {
      ans = mid;
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return ans
};

/**
* @param {number[]} heights
* @return {number}
*/
var largestRectangleArea = function(heights) {
  let ans = 0;
  for (let i = 0; i < heights.length; i++) {
    let total = heights[i];
    let height = heights[i]
    for (let j = i - 1; j >= 0; j--) {
      height = Math.min(height, heights[j])
      const currTotal = height * (i - j + 1);
      if (currTotal < total) {
        break
      }
      total = currTotal;
    }
    ans = Math.max(ans, total)
  }
  return ans
};

/**
* @param {number[][]} matrix
* @return {number}
*/
var minFallingPathSum = function(matrix) {
  const n = matrix.length;
  if (n === 1) {
    return matrix[0][0];
  }
  const dp = JSON.parse(JSON.stringify(matrix));
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const topLeft = dp[i - 1][j - 1];
      const top = dp[i - 1][j];
      const topRight = dp[i - 1][j + 1];
      const opt = [top]
      !isNaN(topLeft) && opt.push(topLeft);
      !isNaN(topRight) && opt.push(topRight);
      dp[i][j] = Math.min(...opt) + matrix[i][j]
    }
  }
  return Math.min(...dp[n - 1])
};