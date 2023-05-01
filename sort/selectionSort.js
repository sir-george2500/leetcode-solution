/**
 * Given a of 13456 using selection sort to sort it 
 */

function selectionSort(arr){

    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      
      // Find the index of the minimum element in the unsorted part of the array
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
  
      // Swap the minimum element with the first element of the unsorted part
      if (minIdx !== i) {
        const temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
      }
    }
   return arr;
}
const arr = [5, 3, 8, 4, 2];

const sortedArr = selectionSort(arr);
console.log(sortedArr); // [2, 3, 4, 5, 8]

