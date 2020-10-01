function lcm(n1, n2) {
	for (let i = 1; i <= n1 * n2; i++) {
		if (!(i % n1) &&
				!(i % n2)) {
			return i
		}
	}
}