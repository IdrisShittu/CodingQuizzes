function secondLargest(arr) {
	const sorted = arr.sort((a ,b) => {
		return b - a;
	})

	return sorted[1];
}