function chosenWine(wines) {
	wines = wines.sort(function(a,b){
		return a.price - b.price;
	});
	if (wines.length == 0) return null;
	else if (wines.length == 1) return wines[0].name;
	else return wines[1].name;
}