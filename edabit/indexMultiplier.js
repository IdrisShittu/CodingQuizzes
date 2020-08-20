function indexMultiplier(arr) {
	var r = 0;
	for (var i in arr) {
		r += i * arr[i];
	}
	return r;
}
//sum of the products of each element of an array and its index