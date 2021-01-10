function charCount(myChar, str) {
	let strCount = 0;
	for (let i=0; i<str.length; i++) {
		if (str.charAt(i) === myChar) {
			strCount++;
		}
	}
	return strCount;
}