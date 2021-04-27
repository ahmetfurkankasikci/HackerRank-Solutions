function getLetter(s) {
    let letter="D";
    let kume1=["a","e","i","o","u"]
    let kume2=["b","c","d","f","g"]
    let kume3=["h","j","k","l","m"]
    s=s.toLowerCase()
    let s1=s[0]
    switch(kume1.indexOf(s1)){
        case 0:
           letter="A"
           return letter;
        
    }
    switch(kume2.indexOf(s1)){
        case 0:
           letter="B"
           return letter;
        
    }
    switch(kume3.indexOf(s1)){
        case 0:
           letter="C"
           return letter;
        
    }
    return letter;
}