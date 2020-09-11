function peelLayerOff(arr) {
	let getWidth = arr[0].length
	let getHeight = arr.length
	let solutionArray = []
	for(let i=1;i < getHeight-1;i++){
		let row = []
		for(let j=1; j < getWidth-1;j++ ){
			row.push(arr[i][j])
		}
		solutionArray.push(row)
	}
	return solutionArray
}