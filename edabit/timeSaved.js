function timeSaved(lim, avg, d) {
	let limitedSpeedTime = d/lim
	let avgSpeedTime = d/avg
	let temp = (limitedSpeedTime-avgSpeedTime)*60
	let result = (Math.round(temp*10))/10
	return result
}