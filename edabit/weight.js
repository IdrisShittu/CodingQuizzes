function weight(r, h) {
	var result = Math.PI * r ** 2 * h / 1000;
	return Math.round(result * 100) / 100;
}