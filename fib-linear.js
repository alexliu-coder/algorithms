function fib_iter(pre1, pre2, count) {
	if (count === 0) return pre2;
	return fib_iter(pre2, pre1 + pre2, count - 1)
}
function fib(n) {
	return fib_iter(0, 1, n - 1)
}
const res = fib(0)
console.log(res);