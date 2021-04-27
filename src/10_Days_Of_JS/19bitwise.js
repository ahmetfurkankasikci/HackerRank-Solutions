var getMaxLessThanK=(n,k)=>{
    
    let yedek=0;
    for(let i=1;i<=n;i++){
        for(let j=i+1;j<=n;j++){
            let ve=i&j  
            if(k>ve && ve>yedek){
                    yedek=i&j        
            }
            
        }
    }
    return yedek;
}