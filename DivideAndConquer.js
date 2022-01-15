/**
 * 求出越过中点的最大子数组
 * @param arr {number[]}
 * @param low {number}
 * @param high {number}
 */
function findCrossMiddleMaxSubArray (arr, low, high) {
    let middle = Math.floor((low + high) / 2);
    let start;
    let leftMax = -Infinity;
    let leftSum = 0;
    for (let i = middle; i >= 0; i--) {
        leftSum = leftSum + arr[i];
        if (leftSum > leftMax) {
            leftMax = leftSum;
            start = i;
        }
    }
    let end;
    let rightMax = -Infinity;
    let rightSum = 0;
    for (let j = middle + 1; j <= high; j++) {
        rightSum = rightSum + arr[j];
        if (rightSum > rightMax) {
            leftMax = rightSum;
            end = j;
        }
    }
    return {start: start, end: end, sum: leftMax + rightSum};
}

/**
 * 求最大子数组
 * @param arr {number[]}
 * @param start {number}
 * @param end {number}
 */
function findMaxSubArray (arr, start, end) {
    if (start === end) {
        return {start, end, max: arr[start]};
    }
    const middle = Math.floor((start + end) / 2);
    const { start: leftStart, end: leftEnd, max: leftMax } = findMaxSubArray(arr, start, middle);
    const { start: rightStart, end: rightEnd, max: rightMax} = findMaxSubArray(arr, middle + 1, end);
    const { start: middleStart, end: middleEnd, sum: middleMax} = findCrossMiddleMaxSubArray(arr, start, end);
    if (leftMax > rightMax && leftMax > middleMax) {
        return {start: leftStart, end: leftEnd, max: leftMax};
    }
    if (rightMax > leftMax && rightMax > middleMax) {
        return { start: rightStart, end: rightEnd, max: rightMax};
    }
    return { start: middleStart, end: middleEnd, max: middleMax };
}

