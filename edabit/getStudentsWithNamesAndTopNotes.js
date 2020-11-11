function getStudentsWithNamesAndTopNotes(students) {
	for (let x in students){
		students[x]['notes'] == '' ? students[x]['topNote'] = 0
			 : students[x]['topNote'] = Math.max(...students[x]['notes']);
        
             delete students[x]['notes'];
	}
	return students
}