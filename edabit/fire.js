function fire(matrix, coordinates) {
	let [x, y] = [...coordinates];
	let set = {
		A: 1, B: 2, C: 3, D: 4, E: 5
	}
	let area = {
		".": "splash",
		"*": "BOOM"
	}
	return area[matrix[set[x] - 1][y - 1]]
}