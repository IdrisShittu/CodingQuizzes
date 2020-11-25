function twins(age, distance, velocity) {
	let earth = (age +distance*2/velocity).toFixed(1)
	let space =Math.sqrt(1- velocity*velocity)*distance/velocity*2+age
	return `Jack's age is ${space.toFixed(1)}, Jill's age is ${earth}`
}