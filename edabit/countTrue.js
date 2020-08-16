function count_true(lst){
	var count = 0;
	for(var i = 0; i < lst.length; i++){
		if(lst[i] === true){
			count++;
		}
	}
	return count;
}