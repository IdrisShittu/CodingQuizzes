function countBoomerangs(arr) {
	return arr.reduce( (a,b,c)=>{
		if((b==arr[c+2])&&(b!=arr[c+1])) a+=1;
		return a
	},0);
}