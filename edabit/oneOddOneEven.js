function oneOddOneEven(n) {
	let nStr = n.toString();
	let nArr = nStr.split("");
	for (i = 0; i < nArr.length; i++){
		nArr[i] = parseInt(nArr[i])
	}
	if ((nArr[0] % 2 == 0 && nArr[1] % 2 != 0) || (nArr[0] % 2 != 0 && nArr[1] % 2 == 0)){
		return true;
	} else {
		return false;
	}
}

//one odd one even