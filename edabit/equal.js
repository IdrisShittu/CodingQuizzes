function equal(a, b, c) {
 if (a === b && a === c) {
	return 3;}
 if (a === b || a === c || b === c) {
	return 2;}
		return 0;
	}