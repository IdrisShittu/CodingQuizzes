function fretFreq(gStr, fret) {
	const freq = {1: 329.63, 2: 246.94, 3: 196.00, 4: 146.83, 5: 110.00, 6: 82.41};
	let result = freq[gStr] * Math.pow(2, fret/12);
	return Math.round(100 * result) / 100; 
}