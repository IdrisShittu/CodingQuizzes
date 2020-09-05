function objectToArray(obj) {
	var r = [];
  for (var i in obj) {
		r.push([i, obj[i]]);
	}
	return r;
}
//convert object to an array of key and value