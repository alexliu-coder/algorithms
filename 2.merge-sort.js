/**
 * 合并两个*有序*数组
 * @param leftArr {number[]}
 * @param rightArr {number[]}
 * @returns {number[]}
 */
function mergeTwoArr (leftArr, rightArr) {
    let l = 0;
    let r = 0;
    let result = [];
    while (l < leftArr.length && r < rightArr.length) {
        if (leftArr[l] >= rightArr[r]) {
            result.push(rightArr[r]);
            r++;
        } else {
            result.push(leftArr[l]);
            l++;
        }
    }
    while (l < leftArr.length) {
        result.push(leftArr[l]);
        l++;
    }
    while (r < rightArr.length) {
        result.push(rightArr[r]);
        r++;
    }
    return result;
}

/**
 * 归并排序
 * @param arr {number[]}
 * @returns {number[]}
 */
function merge (arr) {
    // 长度小于2时，无需再分解
    if (arr.length < 2) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return mergeTwoArr(merge(left), merge(right));
}
