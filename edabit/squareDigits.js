function squareDigits(n) {
	var numbers = n.toString().split('');
	var newNumber = "";
	for(var i=0; i<numbers.length; i++){
		newNumber += Math.pow(Number(numbers[i]), 2).toString();
	}
	return Number(newNumber);
}
//squares every digit of a number