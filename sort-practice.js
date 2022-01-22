// /**
//  * @param {string} s
//  * @return {number}
//  */
// var longestValidParentheses = function(s) {
//     let count = 0;
//     let result = 0;
//     let max = 0;
//     for (let i = 0; i < s.length; i++) {
//         const curr = s[i];
//         if (curr === '(') {
//             count++;
//         } else {
//             if (count > 0) {
//                 count--;
//                 result++
//                 max = Math.max(result, max)
//             }
//         }
//     }
//     return max * 2;
// };
//
// let str = '()(((())))))))))'
// console.log(longestValidParentheses(str));
//
// // 插入排序
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

// let a = [123123,5555,11111,445,123123124,12,35,235,234,123,123,193729,192383901,1];
//
// console.log(insertSort(a))

// megerSort
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

function merge (arr) {
    if (arr.length < 2) return arr
    let middle = Math.floor(arr.length / 2)
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);

    return mergeTwoArr(merge(left), merge(right))
}

let a = [123123,5555,11111,12300000,445,123123124,12,35,235,234,123,123,193729,192383901,1];

console.log(merge(a))
