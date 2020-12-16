function isRepdigit(num) {
	var digits = num.toString();
	for (i=2; i<=digits.length; i++) 
		if (digits[0] !== digits[i-1]) return false;
	return true;
}