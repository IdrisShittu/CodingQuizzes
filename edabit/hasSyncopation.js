function hasSyncopation(s) {
	let arr = [];
	for (let i = 0; i < s.length; i++){
		if (i % 2 !== 0){
			arr.push(s[i]);
		}
	} return arr.includes("#") ? true: false;
}
//returns true if the line of music contains any syncopation.