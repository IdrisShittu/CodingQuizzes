function howUnlucky(y) {
	var counter = 0
	for(let month = 0; month < 12; month++) {
		const date = new Date(y, month, 13)
		if(date.getDay() == 5) {
			counter++
		}
	}
	return counter
}