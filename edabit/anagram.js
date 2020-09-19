function isAnagram (s1, s2) {
    s1=s1.toLowerCase();
    s2=s2.toLowerCase();
    if (s1.length !== s2.length) {
        return false;
    }
    
    var sortS1 = s1.split('').sort().join('');
    var sortS2 = s2.split('').sort().join('');

    return (sortS1 === sortS2);
}