function reversedBinaryInteger(num) {
	let stringNum = num.toString(2).split("").reverse();
	let newNum = stringNum.join("");
	return parseInt(newNum, 2);
	
}