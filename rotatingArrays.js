//rotating Arrays 
/**This problem requires us to rotate an array to the right by a given number of steps k. 
 * We can use the reverse function to reverse the entire array, 
 * and then reverse the first k elements and
 *  the remaining n-k elements separately. 
 * This will give us the desired rotated array.**/
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