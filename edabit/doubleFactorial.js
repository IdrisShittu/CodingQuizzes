function doubleFactorial(num) {
	if(num <= 1) {
			return 1
	} else {
			return num * doubleFactorial(num-2)
	}
}

//returns a number double factorial