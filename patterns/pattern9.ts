export const pattern9 = (number: number) => {
  for (let i = 0; i <= number; i++) {
    for (let j = 1; j <= 2 * i + 1; j++) {
      console.log(`*`);
    }
    console.log(`\n`);
  }
  let num = number;
  for (let i = 0; i <= number; i++) {
    for (let j = 2 * num - 1; j > 0; j--) {
      console.log(`*`);
    }
    num--;
    console.log(`\n`);
  }
};
