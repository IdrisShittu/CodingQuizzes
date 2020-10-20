function primeFactorize(num) {
  let fac = [];
  for(let i = 2; i <= num; i++) {
    while(!(num%i)) {
      fac.push(i);
      num = num / i;
    }
  }
  return fac;
}