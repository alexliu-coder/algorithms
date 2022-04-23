function unique(arr) {
	arr.sort((a, b) => a - b);
	let n = arr.length;
	let l = 0;
	let r;
	while (l < n) {
		for (r = l + 1; r < n; r++) {
			if (arr[l] !== arr[r]) {
				// 不可以在这里输出，不然当r大于n的时候循环直接结束，不会进行最后一次输出
				break;
			}
		}
		console.log(arr[l], r -l);
		l = r
	}
}

let array1 = [1, 1, 1, 2, 3, 3, 4, 5, 6, 6, 6, 6, 7, 7, 8, 8, 8]
unique(array1)