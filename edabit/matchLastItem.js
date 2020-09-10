function matchLastItem(arr) {
	let temp = '';
	for (let i = 0; i < arr.length-1;i++){
		temp += arr[i]; 
	}
	
	return temp===arr[arr.length-1];
}