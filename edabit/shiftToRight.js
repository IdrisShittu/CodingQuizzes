function shiftToRight(x, y) {
	var z = 1;
	for(let i=0; i<y; i++) z = z * 2 ; 
	return Math.floor(x / z);

}
