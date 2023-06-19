export const pattern8 = (number: number) => {
  for (let i = 0; i <= number; i++) {
    for (let j = 2 * number - 1; j >= i; j--) {
      console.log(`*`);
    }
    console.log(`\n`);
  }
};
