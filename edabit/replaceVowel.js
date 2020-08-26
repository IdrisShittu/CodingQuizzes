function replaceVowel(word){
	const vowels = ['a','e','i','o','u'];
	let arr = word.split('');
  for(let i=0 ; i< word.length ;i++)
		{
			for(let j=0;j<vowels.length;j++){
				  if(arr[i]==vowels[j]){
						arr[i]= j +1+'';
					}
			}
		}
	return arr.join('');
}
//replaces vowel in a string with numbers