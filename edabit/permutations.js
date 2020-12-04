function permutations(str) {
	  if (typeof str !== 'string') return str;
    const recursion = (str) => {
        if (str.length < 2) return str;
        let permArr = [];
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            let remainingChars = str.slice(0, i) + str.slice(i + 1);
            for (let permutation of recursion(remainingChars)) {
                permArr.push(char + permutation);
            }
        }
        return permArr;
    }
    return recursion(str).sort().join(' ')
}