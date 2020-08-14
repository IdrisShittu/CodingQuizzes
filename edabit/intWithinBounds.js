function intWithinBounds(n, lower, upper) {
	if(Math.floor(n) !== n ) {
		return false
	}else if(n >= lower && n < upper) {
		return true
	}else{
		return false
	}
}