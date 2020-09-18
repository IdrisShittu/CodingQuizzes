function findZip(str) {
	let i=str.indexOf("zip");
	if(i>0)i=str.indexOf("zip",i+1);
	return i;
}