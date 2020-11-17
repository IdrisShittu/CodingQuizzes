function fib(n) {
	if(n == 0) return 0;
	if (n <= 2) return 1;
  let a = b = 1;
  for (i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}