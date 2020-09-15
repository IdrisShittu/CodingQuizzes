function sumFoundIndexes(arr, n) {
	return arr.reduce( function(accumulator,currentValue,currentIndex){
        if(n===currentValue)accumulator+=currentIndex;
        return accumulator;
    },0)
}