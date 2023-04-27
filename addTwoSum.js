

function addTwoSum(num,target){
    let prev ={};

  for (let i = 0; i<num.length;i++){
    let currentValue = num[i];
    let neededValue = target-currentValue;
    let index2 = prev[neededValue]
    if (index2 !=null){
        console.log("this is the result"+ [index2,i]);
    }else{
        prev[currentValue] = i

        console.log(prev)
    }
  }
}

addTwoSum([1,2,3,4,5,6,7],9);