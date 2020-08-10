function findNemo(sentence) {
	let new = sentence.split(" ");
	for(let i = 0; i < new.length; ++i){
		if(new[i] === "Nemo") {
			return `I found Nemo at ${i + 1}!`
		}
	}
	return "I can't find Nemo :("
}