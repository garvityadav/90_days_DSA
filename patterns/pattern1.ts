export const pattern1 = (number: number) => {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= number; j++) {
      console.log(`*`);
    }
    console.log(`\n`);
  }
};
