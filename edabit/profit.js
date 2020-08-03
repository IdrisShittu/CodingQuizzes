function profit(info) {
	
	return Math.round((info.inventory * info.sellPrice) - (info.inventory * info.costPrice));
}