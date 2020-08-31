function capMe(arr) {
	
  for (var i=0;i<arr.length;i++){
    var s = arr[i].substr(0,1).toUpperCase(); 
    s += arr[i].substr(1).toLowerCase();
    arr[i] = s;
  }
  
  
  return arr;
}
//capitalize the names