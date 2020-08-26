function reverseAndNot(i) {
	var reverse = parseInt(i.toString().split("").reverse().join(""));
	return Number(reverse + '' + i);
}
//returns concatenated number in opposite direction