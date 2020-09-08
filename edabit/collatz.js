function collatz(num) {
	let numberOfSteps = 0
	let result = num
	while(result !== 1){
		if(result % 2 === 0){
			 result = result / 2	
			 }else {
			 	result = result * 3 + 1
			 }
			numberOfSteps ++
		}
	return numberOfSteps
}