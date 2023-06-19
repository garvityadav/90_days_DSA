export function bubbleSort(n: number, arr: number[]) {
  for (let i = n - 1; i >= 1; i--) {
    let bestCase = 0;
    for (let j = 0; j <= i - 1; j++) {
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
