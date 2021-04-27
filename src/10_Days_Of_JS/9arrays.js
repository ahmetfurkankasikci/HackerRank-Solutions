function getSecondLargest(nums) {
    nums.sort((a,b)=>b-a)    
    return nums[1]   
}