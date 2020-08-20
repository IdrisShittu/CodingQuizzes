function isOrthogonal(arr1, arr2) {
	let x=0;
	for (let i=0; i< arr1.length; i++) {
		x+=arr1[i]*arr2[i];
	}
	return x==0;
}

// checks if vectors are othogonal