function normalize(str) {
	if(str === str.toUpperCase()){
		str2 = str.split("");
		str2 = str2.splice(1);
		str2 = str2.join("");
		str2 = str2.toLowerCase();
		str = str.split("");
		str = str.splice(0, 1);
		str = str.join("");
		return str + str2 + "!"; 
	}else{
		return str;
	}
}