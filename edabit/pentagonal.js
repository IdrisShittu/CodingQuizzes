function pentagonal(num) {
	var r = 0;
	for(var i = 1; i<= num; i++) {
		r += (i-1) * 5
	}
	return r + 1
}
//