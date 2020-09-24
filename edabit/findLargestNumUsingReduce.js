function findLargestNum(arr) {
	return arr.reduce( (a,b)=>{
		if(b>a)a=b;
		return a
	},0);
}
