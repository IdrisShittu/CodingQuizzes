function factorGroup(num) {
	let count = 0
	if (num >= 2){
		for (let i = 2; i < num; i++){
			if (num % i == 0){
				count++
			}
		}
	} else {
		count = 1
	}
	return (count % 2 == 0) ? "even" : "odd"
}
//check if a number has even or odd number of factors