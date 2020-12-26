function countTrue(arr) {
  let count = 0;

  arr.forEach((a) => {
    if (a) {
      count++;
    }
  });

  return count;
}