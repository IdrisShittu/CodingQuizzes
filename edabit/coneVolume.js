function coneVolume(h, r) {
	let sum = +(Math.PI * Math.pow(r, 2) * h / 3).toFixed(2);
	return sum;
}