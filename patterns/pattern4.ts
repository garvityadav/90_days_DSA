export const pattern4 = (number: number) => {
  let num = 1;
  for (let i = 0; i < number; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(num);
    }
    console.log(`\n`);
    num++;
  }
};
