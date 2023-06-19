export const pattern8 = (number: number) => {
  let num = number;
  for (let i = 0; i <= number; i++) {
    for (let j = 2 * num - 1; j > 0; j--) {
      console.log(`*`);
    }
    num--;
    console.log(`\n`);
  }
};
