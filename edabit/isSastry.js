function isSastry(number) {
	let n = number + 1
	let nums = +String(number).concat(String(n))
	return Number.isInteger(Math.sqrt(nums))
}

//checks if a number is satry