function fib(pre1, pre2, count) {
	if (count === 0) return pre2;
	return fib(pre2, pre1 + pre2, count - 1)
}

const res = fib(0, 1, 4)
console.log(res);