const minMissPos = arr => {
	let n = 1;
	while (arr.includes(n)) n++;
	return n
}