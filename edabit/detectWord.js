function detectWord(str) {
	var st1 = str;
	var x = "";
	for (i = 0; i < st1.length; i++) {
		var y = st1.substring(i, (i+1));
		if (y == y.toLowerCase()) {
			console.log(y);
			x = x + y;
		}
	} 
	return x;
}