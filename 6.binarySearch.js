/**
 * 二分查找
 * @param arr {number[]}
 * @param target {number}
 * @returns {number | false}
 */
function binarySearch(arr, target) {
  if (arr.length === 0 || !target) return;
  let l = 0;
  let r = arr.length - 1;
  let m;
  while (l <= r) {
    m = Math.floor(l + r);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      return m;
    }
  }
  return false;
}

let nums = [1, 3, 5, 7, 8, 10, 222, 223, 444]

const res = binarySearch(nums, 444)
console.log(res)
