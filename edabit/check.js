function checkScore(str) {
	const scores = {
	  "#": 5,"O": 3,"X": 1,"!": -1,"!!": -3,"!!!": -5
	}
	const result = str.map(x => x.map(i => i = scores[i]).reduce((a,b) => a + b))
		               .reduce((a,b) => a + b);
	return result < 0 ? 0 : result;
}