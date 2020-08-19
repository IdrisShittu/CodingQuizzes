function boxSeq(step){
	if(step===0) return 0;
	else if(step%2===0) return boxSeq(step-1)-1;
	else return 3 +  boxSeq(step-1); 
}

// returns number of boxes in a square