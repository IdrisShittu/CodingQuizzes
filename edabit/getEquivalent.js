function getEquivalent(note) {
	const narration=["C","D","E","F","G","A","B"];
  const index =narration.indexOf(note[0]);
  if(note[1]=== "#") return narration[index+1].concat('b');
  if(note[1]=== "b") return narration[index-1].concat('#')
}