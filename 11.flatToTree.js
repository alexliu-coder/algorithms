let arra = [
	{id: 1, name: '部门1', pid: 0},
	{id: 2, name: '部门2', pid: 1},
	{id: 3, name: '部门3', pid: 1},
	{id: 4, name: '部门4', pid: 3},
	{id: 5, name: '部门5', pid: 4},
]

function arrToTree(arr) {
	let tree = [];
	let map = new Map();
	for (let i = 0; i < arr.length; i++) {
		arr[i].children = [];
		map.set(arr[i].id, arr[i]);
	}

	for (const k in arr) {
		// 根结点判断
		if (arr[k].pid === 0) {
			tree.push(arr[k])
		} else {
			map.get(arr[k].pid).children.push(arr[k])
		}
	}
	return tree
}

console.log(arrToTree(arra))


// tree转化为列表
let tree = '[{"id":1,"name":"部门1","pid":0,"children":[{"id":2,"name":"部门2","pid":1,"children":[]},{"id":3,"name":"部门3","pid":1,"children":[{"id":4,"name":"部门4","pid":3,"children":[{"id":5,"name":"部门5","pid":4,"children":[]}]}]}]}]'
tree = JSON.parse(tree);

function treeToFlat(arr) {
	let treeArray = [];
	function recursive(arr) {
		if (arr.length === 0) return;
		arr.forEach(item => {
			treeArray.push(item)
			recursive(item.children)
		})
	}
	recursive(tree)
	return treeArray;
}
