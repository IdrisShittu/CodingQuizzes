function sumFoundIndexes(arr, n) {
	return arr.reduce( (accumulator,currentValue, currentIndex) => (n===currentValue)? accumulator+=currentIndex : accumulator=accumulator , 0 )
}