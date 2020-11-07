function convert(deg) {
	var num = Number(deg.substring(0,deg.length-2));
	if(deg.substring(deg.length-1)=='F'){
			return Math.round((num -32)* 5/9) + '°C';
	}else if(deg.substring(deg.length-1)=='C'){
			return Math.round(num *9/5 +32) + '°F'
	}else{
		return 'Error'
	}
	
}