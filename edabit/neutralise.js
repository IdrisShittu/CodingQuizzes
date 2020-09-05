function neutralise(s1, s2) {
	let output = "";
	for (let i = 0; i < s1.length; i++)
		if (s1[i] === s2[i])
			output += s1[i];
		else
			output += "0";
	return output;
}