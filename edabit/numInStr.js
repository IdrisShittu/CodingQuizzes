function numInStr(arr) {
	var result = [];	
	for(let i = 0; i < arr.length; i++){
		for(let j = 0; j < arr[i].length; j++){
			var num = parseInt(arr[i][j]);			
			if(num){				
				result.push(arr[i]);
				break;
			}
		}
	}	
	return result;	
}