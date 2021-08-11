//Reverse a string

const msg = "JavaScript is the most frustrating language";

function reversedString(strings) {
  let reversed = "";
  for (const element of strings) {
    reversed = element + reversed;
  }
  return reversed;
}
console.log(reversedString(msg));
