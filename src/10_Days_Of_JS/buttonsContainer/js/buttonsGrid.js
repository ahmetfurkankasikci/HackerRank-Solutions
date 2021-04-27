document.getElementById("btn5").addEventListener("click",()=>{
    let ar=[]
    for(i=1;i<=9;i++){
        ar.push(document.getElementById(`btn${i}`).innerText)
    }
    for(i=1;i<=9;i++){
        document.getElementById(`btn${i}`).innerText
        switch(i){
            case 1:
            case 4:
                document.getElementById(`btn${i}`).innerText=ar[i+2]
                break;
            
            case 2:
            case 3:
                document.getElementById(`btn${i}`).innerText=ar[i-2]
                break;
            
            case 6:
            case 9:
                document.getElementById(`btn${i}`).innerText=ar[i-4]
                break;
            
            case 7:
            case 8:
                document.getElementById(`btn${i}`).innerText=ar[i]
                break;



        }
    }
})