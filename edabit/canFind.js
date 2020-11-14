function canFind(bigrams, words) {
    s=words.join(" ")
    for(i=0;i<bigrams.length;i++){
        if(s.indexOf(bigrams[i])==-1)
            return false 
    }
    return true
}