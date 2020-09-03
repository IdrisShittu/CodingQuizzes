function hackerSpeak(str) {

 var strarr=str.split('');
	for( let x=0;x<strarr.length;x++){
				if(strarr[x]=='a'){
			strarr[x]=4
		}else if(strarr[x]=='e'){
			strarr[x]=3
		}else if(strarr[x]=='i'){
			strarr[x]=1
		}else if(strarr[x]=='o'){
			strarr[x]=0
		}else if(strarr[x]=='s'){
			strarr[x]=5
		}
	}

	return strarr.join('')

}