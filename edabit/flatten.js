function flatten(arr) {
  array2 = [];
  for (let i = 0; i < arr.length; i++) {
    array2 = array2.concat(arr[i]);
  }
  return array2; 
}
//flattens sub array