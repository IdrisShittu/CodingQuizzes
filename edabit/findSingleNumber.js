function findSingleNumber(n) {
	for (i=0; i<n.length; i++) {
	if (n.indexOf(n[i]) == n.lastIndexOf(n[i]))return n[i];
	}
	return null
}