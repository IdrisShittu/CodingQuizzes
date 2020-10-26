function countLayers(rug) {
	var count = 1;
	if(rug.length == 1) return count;
	for(var i = 0; i < Math.ceil(rug.length/2)-1; i++) {
			if(rug[i] != rug[i+1]) count++;
	}
	return count;
}