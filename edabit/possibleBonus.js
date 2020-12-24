function possibleBonus(a, b) {
	if (a === b) return false;
	if (a > b) return false;
	return b - 6 > a? false : true;
}