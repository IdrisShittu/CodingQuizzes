function isTriplet(n1, n2, n3) {
	
	if(((n1*n1)+(n2*n2)) == (n3*n3)){
		return true; 
	}else
	if(((n2*n2)+(n3*n3)) == (n1*n1)){
		return true; 
	}else
		if(((n3*n3)+(n1*n1)) == (n2*n2)){
		return true; 
	}else
	{return false;}
	
}
//checks if three integers forms a pythagoras triplet