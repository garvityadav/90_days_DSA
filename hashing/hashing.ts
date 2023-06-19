function charHashing(array: number[]) {
  let arr1: number[] = [];
  let finalArray: string[] = [];
  const hashMap: { [key: number]: number } = {};

  for (const item of array) {
    //n
    if (hashMap[item]) {
      hashMap[item] += 1;
    } else {
      hashMap[item] = 1;
    }
  }
  for (const key in hashMap) {
    //n
    arr1.push(hashMap[key]);
  }
  arr1 = arr1.sort();

  for (const key in hashMap) {
    //n
    if (hashMap[key] === arr1[0]) {
      finalArray.push(key);
    }
    if (hashMap[key] === arr1[arr1.length - 1]) {
      finalArray.push(key);
    }
  }
  console.log(finalArray); // 0(n)
}

charHashing([10, 5, 10, 15, 10, 5]);
