//rotating Arrays 
function rotate(nums, k) {

  const n = nums.length;
  
   
  // if k = 0
     if(k==0) return

    //if k is greater than n 
      if(k>n){
          k = k % n
      }
    
    nums.reverse();
  
    reversed(nums,0,k-1);
    reversed(nums,k,n-1)
  
  
      console.log(nums);
  
  
  };

//custome reversed


function reversed(nums,start,end){
  while(start<end){
   const temp = nums[start];
   nums[start] = nums[end];
   nums[end] = temp;
   start++
   end--
  }
}

rotate([1,2,3,4,5,6,7],3)