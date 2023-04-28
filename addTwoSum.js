

/**
 * Given an array of integers nums and an integer target,
 *  return indices of the two numbers such that they add up to target.

* You may assume that each input would have exactly one solution,
 and you may not use the same element twice.

* You can return the answer in any order.
 * @param {*} num 
 * @param {*} target 
 */
function addTwoSum(num,target){
    let prev ={};

  for (let i = 0; i<num.length;i++){
    let currentValue = num[i];
    let neededValue = target-currentValue;
    let index2 = prev[neededValue]
    if (index2 !=null){
        console.log([index2,i]);
    }else{
        prev[currentValue] = i

    }
  }
}

addTwoSum([1,2,3,4,5,6,7],9);