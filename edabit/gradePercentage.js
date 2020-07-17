function gradePercentage(userScore, passScore) {
	let s = 'You ';
	userScore = parseInt(userScore.substring(0, userScore.length - 1));
	passScore = parseInt(passScore.substring(0, passScore.length - 1));
	if (userScore < passScore)
		s =  'FAILED';
	if (userScore >= passScore)
		s = 'PASSED';
	return 'You' + ' ' + s + ' ' + 'the Exam';
}