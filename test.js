function treeRecursive(n) {
	if (n < 3) return n;
	return treeRecursive(n - 1) + 2 * treeRecursive(n - 2) + 3 * treeRecursive(n - 3);
}

function iteration(s, m, l, count) {
	const current = 3 * s + 2 * m + l;
	if (count - 3 === 0)  return current;
	return iteration(m, l, current, count - 1)
}

console.log(treeRecursive(5), iteration(0, 1, 2, 5))