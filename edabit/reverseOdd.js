function reverseOdd(str) {
	return str.split(" ").map(s => {
		if(s.length % 2 === 0) return s;
		return s.split("").reverse().join("");
	}).join(" ");
}