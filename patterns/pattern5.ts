export const pattern5 = (number: number) => {
  for (let i = 1; i <= number; i++) {
    for (let j = number; j >= i; j--) {
      console.log(`*`);
    }
    console.log(`\n`);
  }
};
