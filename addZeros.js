function addZero(arr){
let start = 0;
let end = arr.length-1;


    while(start<end){
     if(arr[start]==0){
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        end--;
     }
     start++;
    }

    console.log(arr);
}

addZero([1,0,6,0,2,9]);