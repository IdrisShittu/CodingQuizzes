function sumFoundIndexes(arr, n) {
	return arr.reduce( function(accumulator,currentValue,currentIndex){
        (n===currentValue)? accumulator+=currentIndex : accumulator=accumulator;
		return accumulator;
    },0)
}