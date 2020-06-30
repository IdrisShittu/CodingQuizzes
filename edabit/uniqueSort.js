function uniqueSort(arr) {
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  var newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (newArr[newArr.length - 1] != arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr;
}