function detectWord(str) {
	var str1 = str;
	var x = "";
	for (i = 0; i < str1.length; i++) {
		var y = str1.substring(i, (i+1));
		if (y == y.toLowerCase()) {
			console.log(y);
			x = x + y;
		}
	} 
	return x;
}