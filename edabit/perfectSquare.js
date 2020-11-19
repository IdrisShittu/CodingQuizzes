function perfectSquare(n) {
  let m = 0;
  for (let i = 1; i <= Math.sqrt(n); i++){
    for (let j = 1; j <= Math.sqrt(n); j++){
      if (2 * i * j <= n)
        m++;
    }
  }  
  return m;
}