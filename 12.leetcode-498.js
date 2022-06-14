/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    const point = {
        m: 0,
        n: 0
    }
    let direction = 'up'
    const result = [];
    while (result.length < m * n) {
        const curr = mat[point.m][point.n]
        result.push(curr)
        if (direction === 'up') {
            if (point.m === 0 && point.n < n - 1) {
                point.n++;
                direction = 'down'
            } else if (point.n === n - 1) {
                point.m++;
                direction = 'down'
            } else {
                point.m--;
                point.n++;
            }
        } else {
            if (point.n === 0 && point.m < m - 1) {
                point.m++;
                direction = 'up';
            } else if (point.m === m - 1) {
                point.n++;
                direction = 'up'
            } else {
                point.m++;
                point.n--;
            }
        }
    }
    return result;
};