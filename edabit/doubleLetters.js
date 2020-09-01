function doubleLetters(word) {
	word = word.split("");
	for (var i = 1; i < word.length; i++){
		if(word[i-1] == word[i]){
			return true;
			break;
		}
	}
	return false;
}