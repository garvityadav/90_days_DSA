export const pattern3 = (number: number) => {
  for (let i = 0; i < number; i++) {
    let num = 1;
    for (let j = 0; j <= i; j++) {
      console.log(num);
      num++;
    }
    console.log(`\n`);
  }
};
