function convert(deg) {
	var res = 'Error'
	if (deg.indexOf('F') > 0) {
		res = Math.round((parseFloat(deg) - 32) / 1.8) + '°C'
	} else if (deg.indexOf('C') > 0) {
		res = Math.round(parseFloat(deg) * 1.8 + 32) + '°F'
	}
	return res
}