function reverseArr(num, arr = []) {
  if (num  <= 0 ) {
		return arr 
	} else {
		let n = Math.floor(num/10)
		arr.push (num - n*10) 
		return reverseArr( n , arr )
	}
}