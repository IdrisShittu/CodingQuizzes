function fire(mat, cod) {
	var p=cod[0];
	let obj={"A":0,"B":1,"C":2,"D":3,"E":4};
	var pos=obj[p];
	var el=Number(cod[1])-1;
	if(mat[pos][el]=="*") {
		return "BOOM";
	}
	return "splash";
}