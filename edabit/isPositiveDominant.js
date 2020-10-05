function isPositiveDominant(a) {
	let mySet = new Set(a);
	let pos = 0;
	let neg = 0;
	mySet.forEach(function(element, index){
		if(element > 0){
			pos++;
		}
		else if(element < 0){
			neg++;
		}
	})
	return pos > neg;
}
//