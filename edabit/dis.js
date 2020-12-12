function dis(price, discount) {
  return (100 - discount) / 100 * price 
}function shiftToRight(x, y) {
	let res = 1;
	for(let i=0; i<y; i++){
		res = res * 2 ;  
	}

	return Math.floor(x / res);
}