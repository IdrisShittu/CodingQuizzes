function evenlyDivisible(a, b, c) {
    let sum =0
    for (let i = a; i <= b; i++) {
        if(i%c==0)sum+=i        
    }return sum
}
//returns sums that are evenly divisible