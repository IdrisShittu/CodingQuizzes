function areaOfCountry(name, area) {
	let worldArea = 148940000;
	percentage = area / worldArea * 100;
	return `${name} is ${percentage.toFixed(2)}% of the total world's landmass`;
}