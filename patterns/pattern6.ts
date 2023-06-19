export const pattern6 = (number: number) => {
  for (let i = 1; i <= number; i++) {
    let num = 1;
    for (let j = number; j >= i; j--) {
      console.log(num);
      num++;
    }
    console.log(`\n`);
  }
};
