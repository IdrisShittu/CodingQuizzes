function histogram(arr, char) {
	let output = '';
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i]; j++) {
			output += char;
		}
		output += '\n';
	}
	return output.trim();
}