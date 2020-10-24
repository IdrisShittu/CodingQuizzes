function doubleSwap(str, c1, c2) {
	arr = str.split('')
	
	for(i=0;i<arr.length;i++){
		if(arr[i] == c1){
			arr[i] = c2
		}else if(arr[i]==c2){
			arr[i] = c1
		}
	}	
	return arr.join('')
}