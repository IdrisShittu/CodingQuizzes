function countLayers(rug) {
	var count =0;
	if( !rug.length){
		count = 0;
		return count;
	}
	for( var i=0; i< rug.length; i++){
		for( var j=i+1; j< rug.length; j++){
			if( rug[i] === rug[j]){
				rug.splice(j,1);
				j -= 1;
			}
			}
		}
	return rug.length;
}