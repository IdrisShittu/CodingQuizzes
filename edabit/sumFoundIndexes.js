
function sumFoundIndexes(arr, n) {
	let count=0;
	for(let i=0; i<arr.length; i++)(n===arr[i])? count+=i : count=count;
	return count;
}
