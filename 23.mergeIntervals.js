/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	intervals.sort((a, b) => a[0] - b[0])
	console.log(intervals);
	const result = [];
	for (let i = 0; i < intervals.length; i++) {
		if (result.length && result[result.length - 1][1] >= intervals[i][0]) {
			result[result.length - 1][1] = Math.max(intervals[i][1], result[result.length - 1][1]);
		} else {
			result.push(intervals[i])
		}
	}
	console.log(result);
	return result;
};

const arr = [[1,4],[0,2],[3,5]];
merge(arr)