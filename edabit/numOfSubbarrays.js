function numOfSubbarrays(arr) {
	var arrLength = 0;
	for(var i=0; i<arr.length; i++) {
		if(Array.isArray(arr[i])) {
			arrLength = arrLength +  1;
		}
	}
	return arrLength;
}