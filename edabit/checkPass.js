const crypto = require('crypto');
function checkPass(username, password) {
	let user = userPassDb.find(c => c.username === username);
	if (!user) { return false; }
	let h = crypto.createHash('SHA1').update(password).digest('hex');
	return user.pass_hash === h;
	
}