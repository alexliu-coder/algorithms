/**
 * 插入排序
 * @param arr {number[]}
 * @returns {number[]}
 */
function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        let pre = i - 1;
        while (arr[pre] > curr && pre >= 0) {
            arr[pre + 1] = arr[pre];
            pre--;
        }
        arr[pre + 1] = curr;
    }
    return arr;
}



