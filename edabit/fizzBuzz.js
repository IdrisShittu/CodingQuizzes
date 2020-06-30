function fizzBuzz(number) {
	var arrNumber=[];
	for (var i=1; i<=number; i++){
		if((i%3==0) && (i%5==0) )arrNumber.push("FizzBuzz");
		else if(i%3==0)arrNumber.push("Fizz");
		else if(i%5==0)arrNumber.push("Buzz");
		else arrNumber.push(i);
	} 
	return arrNumber;
}