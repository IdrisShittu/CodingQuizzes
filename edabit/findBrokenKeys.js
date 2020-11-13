function findBrokenKeys(str1, str2) {
	let diffs = [];
	for (let i = 0; i < str1.length; i++){
		if (str1[i] != str2[i]){
			diffs.push(str1[i]);
		}
	}
	return [...new Set(diffs)];
}