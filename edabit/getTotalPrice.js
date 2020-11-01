function getTotalPrice(groceries) {
	let totalPrice = 0;
	groceries.forEach(function(item) {
		totalPrice += (item.quantity * item.price);
	});
	return Math.round(totalPrice * 100) / 100;
}