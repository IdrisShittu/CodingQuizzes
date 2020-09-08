function evenOddTransform(arr, n) {
for(var i = 0; i < arr.length; i++){
		if (arr[i] % 2 == 0){
			arr[i] = arr[i] + (-2)*n;
		}
		else{
			arr[i] = arr[i] + (2)*n;
		}
}
return arr;
}