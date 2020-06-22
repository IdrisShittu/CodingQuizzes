function footballPoints(wins, draws, losses) {
	const pobeda = wins * 3;
	const nereseno = draws * 1;
	const izgubljeno = losses * 0;
	
	return pobeda + nereseno + izgubljeno;
}