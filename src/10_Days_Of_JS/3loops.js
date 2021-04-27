function vowelsAndConsonants(s) {
    const unlu = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let unluMetin=[]
    let unsuzMetin=[]
   
   let metin=s.split("")
   for(let i in metin){
       if(unlu.includes(metin[i])){
           unluMetin.push(metin[i])
       }
       else{
           unsuzMetin.push(metin[i])       
       }
   }
   for(let i in unluMetin){
       console.log(unluMetin[i])
   }
    for(let i in unsuzMetin){
       console.log(unsuzMetin[i])
   }
}