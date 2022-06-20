/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
	const result = [];
	const path = [];
	candidates.sort((a, b) => a - b);
	backTrack(target, 0);
	return result;
	function backTrack(target, begin) {
		if (target === 0) {
			// 浅拷贝
			result.push([...path]);
			return;
		}
		for (let i = begin; i < candidates.length; i++) {
			const curr = candidates[i];
			if (curr > target) break;
			if (i > begin && candidates[i] === candidates[i - 1]) continue;
			path.push(curr);
			backTrack(target - curr, i + 1);
			path.pop();
		}
	}
};

const arr1 = [10,1,2,7,6,1,5];
const tar = 8;

console.log(combinationSum(arr1, tar));