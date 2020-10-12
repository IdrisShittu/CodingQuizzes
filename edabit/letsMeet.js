function letsMeet(distance, va, vb) {
	let time = distance / (va + vb);
	let hours = parseInt(time);
	let minutes = parseInt((time - hours) * 60);
	let seconds = parseInt((((time - hours) * 60) - minutes) *60);
	return `${hours}h ${minutes}min ${seconds}s`;
}
//when two moving object meet.