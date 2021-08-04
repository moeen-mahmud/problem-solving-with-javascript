/**
 * Print all the multiplication tables with numbers from 1 to 10
 */

for (let i = 1; i <= 10; i++) {
  console.log();
  for (let j = 1; j <= 10; j++) {
    let table = i * j;
    console.log(`${i} X ${j} = ${table}`);
  }
}
