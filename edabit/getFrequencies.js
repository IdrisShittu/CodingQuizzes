function getFrequencies(arr) {
	let out = {};
	for (let el of arr) {
		if (out[el]) out[el] += 1;
		else out[el] = 1;
	}
    return out;
    
}