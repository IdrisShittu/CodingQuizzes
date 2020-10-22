function leader(arr) {
  const result = [];
  arr.reverse();
  let min = arr[0];
  result.push(arr[0]);
  for(let i = 1; i < arr.length; i++) {
    if (arr[i] > min) {
      min = arr[i];
      result.push(min);
    }
  }
  return result.reverse();
}
///
