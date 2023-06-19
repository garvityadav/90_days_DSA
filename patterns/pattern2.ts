export const pattern2 = (number: number) => {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(`*`);
    }
    console.log(`\n`);
  }
};
