function shiftToLeft(x, y) {
	if (y == 0) return x;
	return 2 * shiftToLeft(x, y - 1);
}