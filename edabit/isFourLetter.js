function isFourLetters(arr) {
	 var str; 
	 var str2=[];
   for(var i=0; i<arr.length; i++){
		 str=arr[i];
		 if(str.length==4){
			 str2.push(str);
		 }
	 }	
	 return str2;
}