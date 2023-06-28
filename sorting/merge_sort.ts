export const mergeSort = (low: number, arr: number[], high: number) => {
  if (low >= high) return;
  const mid = Math.floor((low + high) / 2);
  console.log(`This is mid : ${mid}`);
  mergeSort(low, arr, mid);
  mergeSort(mid + 1, arr, high);

  return merge(arr, low, mid, high);
};

function merge(arr: number[], low: number, mid: number, high: number) {
  const temp: number[] = [];
  console.log(`THIS IS ARRAY : ${arr}`);
  let left = low;
  let right = mid + 1;
  console.log(`This is left : ${left}`);
  console.log(`This is right : ${right}`);
  while (left <= mid && right <= high) {
    if (arr[left] < arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  console.log(`this is temp : ${temp}`);
  console.log("Merge function returned ");
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  return arr;
}
