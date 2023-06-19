const swap = (i: number, min: number, arr: number[]) => {
  let temp = arr[i];
  arr[i] = arr[min];
  arr[min] = temp;
  return arr;
};
export function sortingEx_1(arr_length: number, arr: number[]) {
  let min = 0;
  for (let i = 0; i < arr_length; i++) {
    for (let j = i; j < arr_length; j++) {
      if (arr[i] > arr[j]) {
        min = j;
        swap(i, min, arr);
      }
    }
  }
  console.log(arr);
}
