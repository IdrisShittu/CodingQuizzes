function retrieveMajor(semver) {
	let maj=semver.split(".");
	return maj[0];
}

function retrieveMinor(semver) {
	let maj=semver.split(".");
	return maj[1];
}

function retrievePatch(semver) {
	let maj=semver.split(".");
	return maj[2];
}