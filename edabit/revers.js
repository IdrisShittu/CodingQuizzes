function reverse(txt){
	let result = "";
	for(let i = txt.length-1; i >= 0; i--){
		if(txt[i] === txt[i].toLowerCase()){
			result += txt[i].toUpperCase();
		} else {
			result += txt[i].toLowerCase();
		}
	}
return result;
}