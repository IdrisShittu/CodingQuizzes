function totalDistance(height, length, tower) {
	var a = Math.round(((tower / height) * length + tower) * 10) / 10;
	return a;
}