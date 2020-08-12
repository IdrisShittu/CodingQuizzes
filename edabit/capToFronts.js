function capToFront(s) {
let arr = s.split("")
let arr1=[]
let arr2=[]
for(i=0;i<arr.length;i++){
	if (arr[i]==arr[i].toUpperCase()){arr1.push(arr[i])}
	else{arr2.push(arr[i])}
}
	
	return arr1.concat(arr2).join("")
	
}