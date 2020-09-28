function combinations(items){
	arr=Array.from(arguments)
	if(arr.includes(0)){
		arr.splice(arr.indexOf(0),1,1) 
		 }
	return arr.reduce((acc,cur)=> acc * cur)
}