function factorChain(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
		if ((arr[i + 1] % arr[i]))
			return false
	}
	return true
}
//checks if subsequent elements are factors of each other