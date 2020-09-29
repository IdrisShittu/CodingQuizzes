function isPandigital(num) {
	var string = num.toString();
	console.log(string);
	var count = 0;
	for(i=0; i<10; i++){
		if (string.includes(i.toString())){
			count++;
		}
	}
	console.log(count);
	if (count===10){
		return true;
	} else{
		return false;
	}
}