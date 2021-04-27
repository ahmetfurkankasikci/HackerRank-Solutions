var modifyArray=(nums)=>{
    for(let i in nums){
        if(nums[i]%2==0){
            nums[i]*=2
        }else{
             nums[i]*=3
        }
    }
    return nums;   
}