function specialReverse(s, c) {
	const words = s.split(" ");
	const result = [];
	for (let i = 0; i < words.length; i++) {
		if (words[i][0] === c) {
			result.push(words[i].split("").reverse().join(""));
		} else {
			result.push(words[i]);
		}
	}
	return result.join(" ");
}

//reverse word that starts with a particular string