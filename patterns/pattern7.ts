export const pattern7 = (number: number) => {
  for (let i = 0; i <= number; i++) {
    for (let j = 1; j <= 2 * i + 1; j++) {
      console.log(`*`);
    }
    console.log(`\n`);
  }
};
