
function addZero(arr){
 let lastIndex=0;
    for(let i = 0; i <arr.length;i++){
        if(arr[i]!==0){
            arr[lastIndex]=arr[i];
            lastIndex++;
        }
    }
    for(let i = lastIndex;i<arr.length;i++){
     arr[i]=0;
    }
    console.log(arr)
}

addZero([1,0,6,0,2,9]);