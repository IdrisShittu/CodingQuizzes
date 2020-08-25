function removeDups(arr) {
  var n = [];
  for (var i = 0; i < arr.length; i++){
    if (n.indexOf(arr[i]) < 0)
    	n.push(arr[i]);
  }
  return n;
}
//remote duplicates from array