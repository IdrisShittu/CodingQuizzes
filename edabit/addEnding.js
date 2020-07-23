function addEnding(arr, ending) {
  var i = 0;
  while(i < arr.length){
    arr[i] = arr[i] + ending;
    i++;
  }
  return arr;
}