export function selectionSort(n: number, arr: number[]) {
  let min = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i; j <= n - 1; j++) {
      if (arr[i] > arr[j]) {
        min = j;
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
      }
    }
  }
  console.log(arr);
}
