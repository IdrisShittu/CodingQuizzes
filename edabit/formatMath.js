function formatMath(expr) {
	var copy = expr.split(" ");
	var res= parseInt(copy[0]);
	var ress = parseInt(copy[2]);
	if(copy[1]=="+"){
		return expr+" = "+(res+ress);
	}
	if(copy[1]=="-"){
		return expr+" = "+(res-ress);
	}
	if(copy[1]=="x"){
		return expr+" = "+(res*ress);
	}
	if(copy[1]=="/"){
		return expr+" = "+(res/ress);
	}
}