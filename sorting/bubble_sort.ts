export function bubbleSort(n: number, arr: number[]) {
  let bestCase = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        bestCase = 1;
      }
    }
    if (bestCase == 0) {
      break;
    }
  }
  console.log(arr);
}
