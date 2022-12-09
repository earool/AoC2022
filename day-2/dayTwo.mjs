import { open } from "node:fs/promises";

// second-part
const file = await open("./data.txt");
let newPoints = 0;

for await (const line of file.readLines()) {
  const myChoice = line.charAt(2);
  const elfsChoice = line.charAt(0);
  const roundPoints = myChoice === 'X' ? 0 : myChoice === 'Y' ? 3 : 6;
  newPoints += roundPoints + shapePoints(elfsChoice, myChoice);
}

console.log(newPoints);


function shapePoints(k, l) {
  // k = elf's choice, l = outcome
  if (k === 'A') {
    // Rock
    return l === 'X' ? 3 : l === 'Y' ? 1 : 2;
  } else if (k === 'B') {
    // Paper
    return l === 'X' ? 1 : l === 'Y' ? 2  : 3;
  } else {
    // Scissors
    return l === 'X' ? 2 : l === 'Y' ? 3 : 1;
  }
}