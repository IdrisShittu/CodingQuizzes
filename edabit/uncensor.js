function uncensor(str, vowels) {
  for (let i = 0; i < str.length; i++) {
    str = str.replace('*', vowels[i]);
  }
  return str;
}