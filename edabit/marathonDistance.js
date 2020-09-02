function marathonDistance(d){
	var result= d.reduce((x,distance)=> x + Math.abs(distance),0);
	if(result==25)
		return true;
	else
		return false;
}
//returns true with the marathon is 25 mile